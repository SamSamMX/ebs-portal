import React from 'react';
import PropTypes from 'prop-types';

// IMPORTA DE MATERIAL UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

// IMPORTA COMPONENTES
import Typography from '../../components/Typography';

// IMG PRODUCT SMOKING HERO
// import buoy from '../../../img/themes/producBuoy.svg';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button} href="/faq">
        <Typography variant="h4" component="span">
          {props.lang.productFaqBtnFaq}
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        {props.lang.productFaqBtnSubtitle}
      </Typography>
      {/* <img src="/static/themes/onepirate/producBuoy.svg" className={classes.buoy} alt="buoy" /> */}
      {/* <img className={classes.buoy} src={buoy} alt="buoy"/> */}
      {/* <img className={classes.buoy} src="https://cdn2.iconfinder.com/data/icons/information-notification-thin-outline/3/06-512.png" alt="faq"/> */}
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
