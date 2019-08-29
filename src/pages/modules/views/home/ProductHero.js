import React from 'react';
import PropTypes from 'prop-types';

// IMPORTA DE MATERIAL UI
import { withStyles } from '@material-ui/core/styles';

// IMPORTA COMPONENTES
import Button from '../../components/Button';
import Typography from '../../components/Typography';

// IMPORTA IMAGENES PARA HERO LAYOUT
import ProductHeroLayout from './ProductHeroLayout';

// PRODUCT HERO CONTENT

const backgroundImage =
  // width: 1400px & height: 1049px
  // 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
  'https://envato-shoebox-0.imgix.net/58e1/f337-885b-4bb2-abc8-4b13dadd1613/drone_soybean_irrigation_062410.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1400&s=a71c27bffe9f8b26876538a5d783c0ec';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none'}} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Enterprise Breeding System
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        {props.lang.productHeroDescription}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/sign-up"
        // to='/sign-up' <---- In buttons 'to' doesn't work 
      >
        {props.lang.productHeroBtnStartTrial}
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        {props.lang.productHeroSubtitle}
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
