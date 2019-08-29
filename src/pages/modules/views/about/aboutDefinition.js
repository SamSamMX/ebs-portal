import React from 'react';
import PropTypes from 'prop-types';

// IMPORTA DE MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// IMPORTA COMPONENTES
import Typography from '../../components/Typography';

// IMG PRODUCT HOW IT WORKS
import curvyLines from '../../static/img/productCurvyLines.png';

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
    height: '760px',
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

function aboutDefinition(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>

        <img className={classes.curvyLines} src={curvyLines} alt="curvyLines"/>

        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          {props.lang.aboutDefinitionTitle}
        </Typography>

        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="h6" className={classes.title}>
                  {props.lang.aboutDefinitionWhoWeAre}
                </Typography>
                <Typography variant="h5" align="center">
                  {props.lang.aboutDefinitionWhoWeAreDescription}
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="h6" className={classes.title}>
                  {props.lang.aboutDefinitionWhatWeDo}
                </Typography>
                <Typography variant="h5" align="center">
                  {props.lang.aboutDefinitionWhatWeDoDescription}
                </Typography>
              </div>
            </Grid>
          </Grid>

        </div>

        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="https://icon-library.net/images/rice-icon-png/rice-icon-png-9.jpg" alt="Rice"/>
              <Typography variant="h6" className={classes.title}>
                {props.lang.aboutDefinitionFuctionalDomainsIcnRice}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="https://cdn3.iconfinder.com/data/icons/autumn-23/48/corn-american-staple-food-maize-grain-sweet-512.png" alt="Maize"/>
              <Typography variant="h6" className={classes.title}>
              {props.lang.aboutDefinitionFuctionalDomainsIcnMaize}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="https://cdn1.iconfinder.com/data/icons/food-allergens/70/food-allergens-wheat-512.png" alt="Wheat"/>
              <Typography variant="h6" className={classes.title}>
                {props.lang.aboutDefinitionFuctionalDomainsIcnWheat}
              </Typography>
            </div>
          </Grid>
        </Grid>

      </Container>
    </section>
  );
}

aboutDefinition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(aboutDefinition);
