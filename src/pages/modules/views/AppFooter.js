// QUEZADA METHOD
import React from 'react';

// IMPORTA MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

// IMPORTA COMPONENTES
import Typography from '../components/Typography';
import TextField from '../components/TextField';

// IMPORTA ICONOS FOOTER
import Facebook from '../static/img/appFooterFacebook.png';
import Twitter from '../static/img/appFooterTwitter.png';
import Linkedin from '../static/img/appFooterLinkedin.png';
import Pinterest from '../static/img/appFooterPinterest.png';
import Youtube from '../static/img/appFooterYoutube.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  iconSocial: {
    width: 23,
    height: 23,
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 130,
  },
}));

// TEXTFIELD OPTIONS
const LANGUAGES = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'sp',
    label: 'Spanish',
  },
];

export default function AppFooter(props) {
  const classes = useStyles();

// EVENTO PARA CAMBIAR DE LENGUAJE
   const handleChange = () => event => {
     props.setLang(event.target.value);
  };

  return (
    
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >

              {/* ICONOS REDES SOCIALES FOOTER */}
              <Grid item className={classes.icons}>
                <a href="https://es-la.facebook.com/pg/accimmyt/posts/?ref=page_internal" className={classes.icon}>
                  {/* <img src="/static/themes/onepirate/appFooterFacebook.png" alt="Facebook" /> */}
                  <img src={Facebook} alt="Facebook"/>
                </a>
                <a href="https://twitter.com/cimmyt?lang=es" className={classes.icon}>
                  <img src={Twitter} alt="Twitter"/>
                </a>
                <a href="https://mx.linkedin.com/company/cimmyt" className={classes.icon}>
                  <img src={Linkedin} alt="Linkedin" className={classes.iconSocial}/>
                </a>
                <a href="https://www.youtube.com/user/CIMMYTint" className={classes.icon}>
                  <img src={Youtube} alt="Youtube" className={classes.iconSocial}/>
                </a>
                <a href="https://www.pinterest.com.mx/cimmyt/" className={classes.icon}>
                  <img src={Pinterest} alt="Pinterest" className={classes.iconSocial}/>
                </a>
              </Grid>
  
              <Grid item>2019 EBS PORTAL</Grid>

            </Grid>
          </Grid>


          {/* LEGAL - TERM AND PRIVACY */}
          <Grid item xs={6} sm={4} md={2}>

            <Typography variant="h6" marked="left" gutterBottom>
              {props.lang.footerLegal}
            </Typography>

            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/terms/">{props.lang.footerTerms}</Link>
              </li>

              <li className={classes.listItem}>
                <Link href="/privacy/">{props.lang.footerPrivacy}</Link>
              </li>
            </ul>
            
          </Grid>


          {/* LANGUAGE */}
          <Grid item xs={6} sm={8} md={4}>

            <Typography variant="h6" marked="left" gutterBottom>
              {props.lang.footerLang}
            </Typography>

            <TextField
              select
              className={classes.language}
              value={props.lang.title}
              onChange={handleChange()}
              SelectProps={{
                native: true
              }}
            >
              {LANGUAGES.map(optionsLang  => (
                <option key={optionsLang.value} value={optionsLang.value} >
                  {optionsLang.label}
                </option>         
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

