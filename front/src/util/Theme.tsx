import { createMuiTheme } from '@material-ui/core/styles';

const purpleMain = '#bb86fc';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          border: '2px solid',
          borderColor: purpleMain,
        },
      },
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: '2px solid',
            borderColor: purpleMain,
          },
        },
        '& label.Mui-focused': {
          color: 'white',
        },
      },
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      label: 'First Name',
      InputLabelProps: {
        style: { color: 'white' },
      },
      inputProps: {
        style: { color: 'white' },
      },
    },
  },
});
