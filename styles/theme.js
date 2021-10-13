import { createTheme } from '@mui/material/styles';
import { amber, grey, orange } from '@mui/material/colors';

export const getColor = (style) => {
  switch (style) {
    case 'rp':
      return globalTheme.palette.error.main;
    case 'f':
      return globalTheme.palette.warning.main;
    case 'os':
      return globalTheme.palette.success.main;
    default:
      return globalTheme.palette.error.main;
  }
};

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
  palette: {},
});

export default globalTheme;
