import React from 'react';
import {Link} from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';

const styles = {
  textDecoration: 'none',
};

const body = (props) => (
  <Link to="/bar" style={styles}>
    <p className="App-intro" style={{color: props.muiTheme.palette.textColor}}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </Link>
);

export default muiThemeable()(body);
