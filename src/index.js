import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import './index.css';

const MUI = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MUI />, document.getElementById('root'));
