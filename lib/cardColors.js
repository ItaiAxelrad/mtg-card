import { red, blue, green, amber, grey } from '@mui/material/colors';

export default function getCardColors(color) {
  const cardColors = {};
  switch (color) {
    case 'white':
      cardColors.bg = amber[50];
      cardColors.bg2 = amber[100];
      cardColors.border = amber[500];
      break;
    case 'blue':
      cardColors.bg = blue[50];
      cardColors.bg2 = blue[600];
      cardColors.border = blue[700];
      break;
    case 'red':
      cardColors.bg = red[50];
      cardColors.bg2 = red[800];
      cardColors.border = red[900];
      break;
    case 'green':
      cardColors.bg = green[50];
      cardColors.bg2 = green[800];
      cardColors.border = green[900];
      break;
    case 'black':
      cardColors.bg = grey[200];
      cardColors.bg2 = grey[800];
      cardColors.border = grey[900];
      break;
    default:
      cardColors.bg = grey[50];
      cardColors.bg2 = grey[200];
      cardColors.border = grey[500];
  }
  return cardColors;
}
