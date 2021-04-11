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
            <Field id="firstName" name="firstName" as={TextField} />
            <br></br>
            <br></br>
            <Field id="lastName" name="lastName" as={TextField} />
            <p>{JSON.stringify(values)}</p>
          </ThemeProvider>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
