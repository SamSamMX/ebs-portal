import React from 'react';
import PropTypes from 'prop-types';

// IMPORTA DE MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// IMPORTA COMPONENTES
import Button from '../../components/Button';
import Typography from '../../components/Typography';

// IMG PRODUCT HOW IT WORKS
import curvyLines from '../../static/img/productCurvyLines.png';
// import hammer from '../../../img/themes/productHowItWorks1.svg';


const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <img className={classes.curvyLines} src={curvyLines} alt="curvyLines"/>
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          {props.lang.productHowItWorksTitle}
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                {/* <img
                  src="/static/themes/onepirate/productHowItWorks1.svg"
                  alt="suitcase"
                  className={classes.image}
                /> */}
                {/* <img className={classes.image} src={hammer} alt="hammer"/> */}
                <img className={classes.image} src="https://www.flaticon.es/premium-icon/icons/svg/924/924278.svg" alt="seedPhase1"/>
                <Typography variant="h5" align="center">
                  {props.lang.productHowItWorksPhase1}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img className={classes.image} src="https://cdn4.iconfinder.com/data/icons/miscellaneous-2-line/64/maturity_growth_plant_increase-512.png" alt="seedPhase2"/>
                <Typography variant="h5" align="center">
                 {props.lang.productHowItWorksPhase2}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img className={classes.image} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/environmental-leaf-567064.png" alt="seedPhase3"/>
                <Typography variant="h5" align="center">
                  {props.lang.productHowItWorksPhase3}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/about/"
        >
          {props.lang.productHowItWorksBtnKnowMore}
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
