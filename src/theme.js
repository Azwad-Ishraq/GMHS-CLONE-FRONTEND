import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#02a650',
      
    },
    error: {
      main: red.A400,
    },
    
  },
  typography:{
    fontFamily:'cursive'
  }

});

export default theme;
