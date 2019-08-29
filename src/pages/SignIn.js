import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';

// IMPORTA DE MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

// IMPORTA COMPONENTES
import Typography from './modules/components/Typography';

// IMPORTA VISTAS
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import AppFooter from './modules/views/AppFooter';

//IMPORTA FORMS
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn(props) {

  const classes = useStyles();

  const [sent, setSent] = React.useState(false);

  const validate = values => {
    const errors = required(['email', 'password'], values);
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
    <React.Fragment>
      <AppAppBar lang={props.lang} setLang={props.setLang}/>

      <AppForm>

        <React.Fragment>

          <Typography variant="h3" gutterBottom marked="center" align="center">
            {props.lang.signInTitle}
          </Typography>

          <Typography variant="body2" align="center">
              {props.lang.signInSubtitle}
            <Link href="/sign-up/" align="center" underline="always">
              {props.lang.signInLnkSignUpHere}
            </Link>
          </Typography>

        </React.Fragment>

        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label={props.lang.signInEmail}
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label={props.lang.signInPassword}
                type="password"
                margin="normal"
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
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : [props.lang.signInBtnSignIn] }
              </FormButton>
            </form>
          )}
        </Form>

        <Typography align="center">
          <Link underline="always" href="/forgot-password/">
            {props.lang.signInLnkForgotPassword}
          </Link>
        </Typography>

      </AppForm>

      <AppFooter lang={props.lang} setLang={props.setLang}/>
    </React.Fragment>
  );
}

export default SignIn;
