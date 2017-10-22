import {
  teal500, teal700, teal100,
  grey100, grey400, grey500, grey600, grey700, grey900,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

// All the theme components styles
// https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: grey700,
    primary2Color: grey500,
    primary3Color: grey100,
    accent1Color: teal500,
    accent2Color: teal700,
    accent3Color: teal100,
    textColor: grey900,
    secondaryTextColor: grey600,
    alternateTextColor: white,
    canvasColor: white,
    alternateCanvasColor: fade(darkBlack, 0.8),
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: teal500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
