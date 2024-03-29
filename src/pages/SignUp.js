// import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';

// IMPORTA DE MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

// IMPORTA COMPONENTES
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';

// IMPORTA VISTAS
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';

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

function SignUp(props) {

  const classes = useStyles();

  const [sent, setSent] = React.useState(false);

  const validate = values => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

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
      <AppAppBar lang={props.lang} />
      <AppForm>

        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>

          <Typography variant="body2" align="center">
            <Link href="/sign-in/" underline="always">
            {/* <Link to='/sign-in' underline="always"> */}
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>

        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="cusname"
                    fullWidth
                    label="Customer name"
                    name="customerName"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="cname"
                    fullWidth
                    label="Company name"
                    name="companyName"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="jtitle"
                    fullWidth
                    label="Job title"
                    name="jobTitle"
                    required
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="pnumber"
                    fullWidth
                    label="Phone number"
                    name="phoneNumber"
                    required
                  />
                </Grid>
              </Grid>

              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />

              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
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
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </form>
          )}
        </Form>

      </AppForm>
      <AppFooter lang={props.lang} />

    </React.Fragment>
  );
}
export default SignUp;
// export default withRoot(SignUp);
