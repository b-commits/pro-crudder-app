/** @jsxImportSource @emotion/react */
import { Formik, Field, Form } from 'formik';
import { TextField } from '@material-ui/core';
import { formText } from './Home-style';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme as userTheme } from '../../util/Theme';

interface Values {
  firstName: string;
  lastName: string;
}

function UserForm() {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      onSubmit={(values: Values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form css={formText}>
          <ThemeProvider theme={userTheme}>
            <Field
              id="firstName"
              name="firstName"
              as={TextField}
              color="secondary"
              label="First Name"
              defaultValue="First name..."
              variant="outlined"
            />
            <Field
              id="lastName"
              name="lastName"
              as={TextField}
              color="secondary"
              label="Last Name"
              defaultValue="Last name..."
              variant="outlined"
            />
            <p>{JSON.stringify(values)}</p>
          </ThemeProvider>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
