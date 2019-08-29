import React from 'react';
import PropTypes from 'prop-types';

// IMPORTA DE MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';

// IMPORTA COMPONENTES
import Typography from '../../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url: 'https://www.julius-kuehn.de/media/_processed_/csm_Pflanzenzuechtung-Start_b9e7e6a79d.jpg',
      title: 'BREEDING 4 RESULTS',
      width: '33.3%',
      href: "https://b4rdemo.irri.org/"
    },
    {
      url: 'https://www.bzbeeinc.com/wp-content/uploads/2018/07/Soil-Sampling-1.jpg',
      title: 'SAMPLE MANAGER',
      width: '33.3%',
      href: "https://www.google.com/"
      
    },
    {
      url: 'https://static.wixstatic.com/media/47938d_c4e49d0a68b84c10afcdb74dc972a0bf~mv2.jpg/v1/fill/w_618,h_356,al_c,lg_1,q_80/47938d_c4e49d0a68b84c10afcdb74dc972a0bf~mv2.jpg',
      title: 'ANALYTICAL REQUEST MANAGER',
      width: '33.3%',
      href: "https://material-ui.com/"
    },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
    //   title: 'Tour',
    //   width: '38%',
    // },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
    //   title: 'Gastronomy',
    //   width: '38%',
    // },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80',
    //   title: 'Shopping',
    //   width: '24%',
    // },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80',
    //   title: 'Walking',
    //   width: '40%',
    // },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
    //   title: 'Fitness',
    //   width: '20%',
    // },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
    //   title: 'Reading',
    //   width: '40%',
    // },
  ];

  return (
    <Container className={classes.root} component="section">

      <Typography variant="h4" marked="center" align="center" component="h2">
      {props.lang.productApplicationsTitle}
      </Typography>

      <div className={classes.images}>
        {images.map(image => (

          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={image.href}
          >

          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />

          <div className={classes.imageBackdrop} />

          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <div className={classes.imageMarked} />
            </Typography>
          </div>
          
          </ButtonBase>

        ))}
      </div>

    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
