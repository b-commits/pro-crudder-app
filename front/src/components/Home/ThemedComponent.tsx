import { ThemeProvider } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { theme as userTheme } from '../../util/Theme';

export default function ThemedComponent() {
  return (
    <ThemeProvider theme={userTheme}>
      <TextField color="secondary" />
    </ThemeProvider>
  );
}
