/** @jsxImportSource @emotion/react */
import { Formik, Field, Form } from 'formik';
import { TextField } from '@material-ui/core';
import { formText } from './Home-style';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme as userTheme } from '../../util/Theme';
import { FileUploadField } from '../FileUpload/FileUploadField';

interface Values {
  firstName: string;
  lastName: string;
}

function UserForm() {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', files: [] }}
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
              label="First name"
            />
            <Field
              id="lastName"
              name="lastName"
              as={TextField}
              label="Last name"
            />
            <FileUploadField name="files" />
            <p>{JSON.stringify(values)}</p>
          </ThemeProvider>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
