import { createTheme } from '@mui/material/styles';
import { red, blue, green, yellow, amber, grey } from '@mui/material/colors';


// a dedicated function that will return the palette based on the mode
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
        }
      : {
          // palette values for dark mode
        }),
  },
});

// Create a theme instance.
const globalTheme = createTheme({
  typography: {
    fontFamily: ['Cardo', 'serif'].join(','),
  },
  palette: {
    primary: { main: red[600] },
  },
});

export default globalTheme;
