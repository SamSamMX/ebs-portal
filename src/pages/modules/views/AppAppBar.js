import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//import {Link} from 'react-router-dom';
// Con la importacion de arriba se usa: to='/pagina-a-donde-se-quiere-ir'

// IMPORTA DE MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
// Con Link de material se usa: href="/pagina-a-donde-se-quiere-ir/"
// Como se seguira el estandar de material UI se usara esta solucion

// IMPORTA COMPONENTES
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = theme => ({
  title: {
    fontSize: 24,
    textDecoration: 'none',
    color: theme.palette.common.white
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 0,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    textTransform: 'uppercase',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    textDecoration: 'none'
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
    textDecoration: 'none'
  },
});

function AppAppBar(props) {
  // alert(JSON.stringify(props.lang))
  const { classes } = props;
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>

          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            className={classes.title}
            href="/"
            // to="/"
          >
            {'EBS LOGO'}   
          </Link>
         
          <div className={classes.right}>

            <Link
              variant="h6"
              // underline="none" <---- opcion solo valida en link de material ui
              className={classes.rightLink}
              href="/about/"
              // to='/about'
            >
              {props.lang.AppAppBarBtnAbout}
            </Link>

            <Link
              color="inherit"
              variant="h6"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/contact/"
              // to='/contact'
            >
              {props.lang.AppAppBarBtnContact}
            </Link>

            <Link
              color="inherit"
              variant="h6"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/sign-in/"
              // to='/sign-in'
            >
              {props.lang.AppAppBarBtnSignIn}
            </Link>

            <Link
              variant="h6"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/sign-up/"
              // to='/sign-up'
            >
              {props.lang.AppAppBarBtnSignUp}
            </Link>

          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
