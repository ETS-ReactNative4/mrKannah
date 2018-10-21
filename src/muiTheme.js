import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import common from '@material-ui/core/colors/common';
import {fade} from '@material-ui/core/styles/colorManipulator';
import spacing from '@material-ui/core/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  overrides: {
    MuiTabs: {
      root: {
        color: common.white,
      },
    },
  },
  palette: {
    primary: grey,
    secondary: teal,
    text: {
      primary: grey['900'],
      secondary: grey['600'],
      alternate: common.white,
    },
    alternateCanvasColor: fade(common.black, 0.8),
  },
  typography: {
    useNextVariants: true,
  },
};
