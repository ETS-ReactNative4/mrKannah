import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import common from '@material-ui/core/colors/common';
import {fade} from '@material-ui/core/styles/colorManipulator';
import spacing from '@material-ui/core/styles/spacing';

// All the theme components styles
// https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: grey['700'],
    primary2Color: grey['500'],
    primary3Color: grey['100'],
    accent1Color: teal['500'],
    accent2Color: teal['700'],
    accent3Color: teal['100'],
    textColor: grey['900'],
    secondaryTextColor: grey['600'],
    alternateTextColor: common.white,
    canvasColor: common.white,
    alternateCanvasColor: fade(common.darkBlack, 0.8),
    borderColor: grey['400'],
    disabledColor: fade(common.darkBlack, 0.3),
    pickerHeaderColor: teal['500'],
    clockCircleColor: fade(common.darkBlack, 0.07),
    shadowColor: common.fullBlack,
  },
};
