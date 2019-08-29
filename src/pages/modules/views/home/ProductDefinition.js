import React from 'react';
import PropTypes from 'prop-types';

// IMPORTA DE MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// IMPORTA COMPONENTES
import Typography from '../../components/Typography';

// IMG PRODUCT VALUES
import curvyLines from '../../static/img/productCurvyLines.png';
// import DNA from '../../../img/themes/productValues1.svg';
// import graph from '../../../img/themes/productValues2.svg';
// import clock from '../../../img/themes/productValues3.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
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
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              /> */}
              {/* <img className={classes.image} src={suitcase} alt="DNA"/> */}
              <img className={classes.image} src="https://cdn4.iconfinder.com/data/icons/budicon-medical/25/dna-512.png" alt="DNA"/>
              <Typography variant="h6" className={classes.title}>
                {props.lang.productDefinitionGenotypingTitle}
              </Typography>
              <Typography variant="h5">
                {props.lang.productDefinitionGenotypingDescription}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              /> */}
              {/* <img className={classes.image} src={graph} alt="graph"/> */}
              <img className={classes.image} src="http://cdn.onlinewebfonts.com/svg/download_532935.png" alt="DNA"/>
              <Typography variant="h6" className={classes.title}>
              {props.lang.productDefinitionPhenotypingTitle}
              </Typography>
              <Typography variant="h5">
              {props.lang.productDefinitionPhenotypingDescription}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              {/* <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              /> */}
              {/* <img className={classes.image} src={clock} alt="clock"/> */}
              <img className={classes.image} src="https://cdn0.iconfinder.com/data/icons/ecology-97/24/flask-natural-gmo-free-organic-eco-environment-non-gmo-all-ecology-non-512.png" alt="DNA"/>
              <Typography variant="h6" className={classes.title}>
                {props.lang.productDefinitionAnalyticalTitle}
              </Typography>
              <Typography variant="h5">
                {props.lang.productDefinitionAnalyticalDescription}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
