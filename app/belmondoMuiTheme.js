import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {amber300, amber500, amber900} from 'material-ui/styles/colors';

export default (userAgent) => {
  return getMuiTheme({
    palette: {
      primary1Color: amber900,
      primary2Color: amber500,
      primary3Color: amber300
    },
  }, {
    avatar: {
      borderColor: null,
    },
    userAgent: userAgent
  });
};
