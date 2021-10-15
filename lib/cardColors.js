import { red, blue, green, amber, grey } from '@mui/material/colors';

export default function getCardColors(color) {
  const cardColors = {};
  switch (color) {
    case 'white':
      cardColors.bg = amber[50];
      cardColors.bg2 = amber[200];
      cardColors.border = amber[500];
      break;
    case 'blue':
      cardColors.bg = blue[50];
      cardColors.bg2 = blue[200];
      cardColors.border = blue[500];
      break;
    case 'red':
      cardColors.bg = red[50];
      cardColors.bg2 = red[200];
      cardColors.border = red[500];
      break;
    case 'green':
      cardColors.bg = green[50];
      cardColors.bg2 = green[200];
      cardColors.border = green[500];
      break;
    case 'black':
      cardColors.bg = grey[200];
      cardColors.bg2 = grey[700];
      cardColors.border = grey[800];
      break;
    default:
      cardColors.bg = grey[50];
      cardColors.bg2 = grey[200];
      cardColors.border = grey[500];
  }
  return cardColors;
}
