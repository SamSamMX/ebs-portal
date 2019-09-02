import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Field, Form, FormSpy } from 'react-final-form';

// IMPORTA DE MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// IMPORTA VISTAS
import AppForm from '../AppForm';

//IMPORTA FORMS
import { email, required } from '../../form/validation';
import RFTextField from '../../form/RFTextField';
import FormButton from '../../form/FormButton';
import FormFeedback from '../../form/FormFeedback';

// IMPORTA ICONOS MATERIAL UI
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// IMPORTA COMPONENTES
import Typography from '../../components/Typography';


const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundImage: 'url(https://pbs.twimg.com/media/DkkcETeV4AIVE9i.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    display: 'flex',
    borderRadius: 30,
    boxShadow: '8px 8px 20px #131313',
    width: '80em',
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
  },
  title: {
    marginBottom: theme.spacing(14),
    fontSize: '',
  },
  imageLeft: {
    backgroundImage: 'url(https://maize.org/wp-content/uploads/sites/5/2018/09/DSCF1822.jpg)',
    backgroundColor: 'rgb(55, 55, 55)',
    backgroundBlendMode: 'soft-light',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '30px 0px 0px 30px',
  },
  
  // ====== LISTA IZQUIERDA ======
  // CONTENEDOR - LISTA
  listContainer: {
    marginTop: theme.spacing(20),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // LISTA - FORMA
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(50, 50, 50, .3)',
    color: 'white',
  },
  // LISTA - TITULOS
  textList: {
    color: 'white',
    fontWeight: 'bold',
  },
  // LISTA - TEXTO INTERNO
  inline: {
    display: 'inline',
    color: 'white',
  },
  // LISTA - LINEA DIVISORA
  divider: {
    height: 1,
    backgroundColor: '#686a69',
  },

  // ====== APPFORM DERECHA ======
  // FORM - CONTENEDOR
  form: {
    marginTop: theme.spacing(6),
  },
  // FORM - BOTON
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
});


function ContactContent(props) {
  const { classes } = props;

  const [sent, setSent] = useState(false);

  const validate = values => {
    const errors = required(['contactName', 'contactCompany', 'contactPhone', 'contactCountry', 'contactEmail', 'contactMessage'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <section className={classes.root}>
      <Container className={classes.container}>

        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          {props.lang.contactTitle}
        </Typography>

        <div>
          {/* PRINCIPAL CONTENT */}
          <Paper container className={classes.paper}>

            {/* ======================= IZQUIERDA ========================== */}
            <Grid item xs={12} md={6} className={classes.imageLeft} > 
              <Grid className={classes.listContainer}>
                <List className={classes.list}>

                  <ListItem alignItems="flex-start">

                    <ListItemAvatar>
                      <LocationOnOutlinedIcon />
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                      <Typography className={classes.textList}>
                        {props.lang.contactAdress}
                      </Typography>  
                      }
                      secondary={
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {props.lang.contactAdressDescription}
                        </Typography>  
                      }
                    />
                  </ListItem>

                  <Divider variant="inset" component="li" className={classes.divider} />

                  <ListItem alignItems="flex-start">

                    <ListItemAvatar>
                      <PhoneOutlinedIcon/>
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        <Typography className={classes.textList}>
                          {props.lang.contactCommunicate}
                        </Typography>  
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {props.lang.contactCommunicateDescription}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>

                  <Divider variant="inset" component="li" className={classes.divider} />

                  <ListItem alignItems="flex-start">

                    <ListItemAvatar>
                      <MailOutlineIcon/>
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        <Typography className={classes.textList}>
                          {props.lang.contactGeneralSupport}
                        </Typography>  
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {props.lang.contactGeneralSupportDescription}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>  
              </Grid>
            </Grid>

            {/* ==================== CONTENIDO DERECHA =====================*/}
            <Grid item xs={12} md={6}>
              <AppForm>

                <Typography variant="h4" gutterBottom marked="center" align="center" >
                  {props.lang.contactSubtitle}
                </Typography>

              <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
                {({ handleSubmit2, submitting }) => (
                  <form onSubmit={handleSubmit2} className={classes.form} noValidate>

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          autoFocus
                          component={RFTextField}
                          autoComplete="coname"
                          fullWidth
                          label={props.lang.contactName}
                          name="contactName"
                          required
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Field
                          component={RFTextField}
                          autoComplete="cocompany"
                          fullWidth
                          label={props.lang.contactCompany}
                          name="contactCompany"
                          required
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Field
                          component={RFTextField}
                          autoComplete="conumber"
                          fullWidth
                          label={props.lang.contactPhoneNumber}
                          name="contactPhone"
                          required
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Field
                          component={RFTextField}
                          autoComplete="cocountry"
                          fullWidth
                          label={props.lang.contactCountry}
                          name="contactCountry"
                          required
                        />
                      </Grid>
                    </Grid>

                    <Field
                      autoComplete="coemail"
                      component={RFTextField}
                      disabled={submitting || sent}
                      fullWidth
                      label={props.lang.contactEmail}
                      margin="normal"
                      name="contactEmail"
                      required
                    />

                    <Field
                      autoComplete="comessage"
                      component={RFTextField}
                      disabled={submitting || sent}
                      fullWidth
                      label={props.lang.contactMessage}
                      margin="normal"
                      name="contactMessage"
                      required
                      multiline
                      rows="4"
                    />

                    <FormSpy subscription={{ submitError: true }}>
                      {({ submitError }) =>
                        submitError ? (
                          <FormFeedback className={classes.feedback} error>
                            {submitError}
                          </FormFeedback>
                        ) : null
                      }
                    </FormSpy>

                    <FormButton
                      className={classes.button}
                      disabled={submitting || sent}
                      color="secondary"
                      fullWidth
                    >
                      {submitting || sent ? 'In progress…' : [props.lang.contactBtnSendMessage]}
                    </FormButton>
                  </form>
                )}
              </Form>

              </AppForm>
            </Grid>
          </Paper>
        </div>

      </Container>
    </section>
  );
}

ContactContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactContent);
