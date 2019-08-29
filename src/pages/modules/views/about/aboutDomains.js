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

function functionalDomains(props) {
  const { classes } = props;

  const images = [
    {
      url: 'https://i.pinimg.com/564x/0a/c1/87/0ac187acb5cfc83e687c4ec7c24387a9--jaehee-kang-aesthetic-work-aesthetic.jpg',
      title: props.lang.aboutDefinitionFuctionalDomainsOption1,
      width: '25%',
      // href: "https://b4rdemo.irri.org/"
    },
    {
      url: 'https://cdn-ep19.pressidium.com/wp-content/uploads/2011/05/photography-books.jpg',
      title: props.lang.aboutDefinitionFuctionalDomainsOption2,
      width: '25%',
      // href: "https://www.google.com/"
      
    },
    {
      url: 'https://photogmarketing.com/wp-content/uploads/2016/10/Photography-Website-Analytics.jpg',
      title: props.lang.aboutDefinitionFuctionalDomainsOption3,
      width: '25%',
      // href: "https://material-ui.com/"
    },
    {
      url:
        'http://amclaboratory.com/wp-content/uploads/2018/08/cochin-medical-laboratory-chullickal-ernakulam-thyroid-testing-laboratory-6zhcbe.jpg',
        title: props.lang.aboutDefinitionFuctionalDomainsOption4,
      width: '25%',
    },
    {
      url:
        'https://webapi.project-syndicate.org/library/abd9527e6d8908046bea34923edd8806.jpg',
        title: props.lang.aboutDefinitionFuctionalDomainsOption5,
      width: '50%',
    },
    {
      url:
        'http://www.virtualmuseum.ca/media/edu/FR/uploads/image/P2006_1_b34850.jpg',
        title: props.lang.aboutDefinitionFuctionalDomainsOption6,
      width: '50%',
    },
    {
      url:
        'http://cdn.digital-photo-secrets.com/images/plant-new-life-large.jpg',
        title: props.lang.aboutDefinitionFuctionalDomainsOption7,
      width: '25%',
    },
    {
      url:
        'https://inta.gob.ar/sites/default/files/imagenes/EEASalta/banco_germoplasma.jpg',
        title: props.lang.aboutDefinitionFuctionalDomainsOption8,
      width: '25%',
    },
    {
      url:
        'https://ak0.picdn.net/shutterstock/videos/33472870/thumb/1.jpg',
        title: props.lang.aboutDefinitionFuctionalDomainsOption9,
      width: '25%',
    },
    {
      url:
        'https://www.itscanfixthat.com/wp-content/uploads/2014/05/hardwarerepair.jpg',
        title: props.lang.aboutDefinitionFuctionalDomainsOption10,
      width: '25%',
    },
  ];

  return (
    <Container className={classes.root} component="section">

      <Typography variant="h4" marked="center" align="center" component="h2">
      {props.lang.aboutDefinitionFuctionalDomains}
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

functionalDomains.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(functionalDomains);
