import React from 'react';
import {Link} from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';

import logo from './logo.svg';

const styles = {
  textDecoration: 'none',
};

const header = (props) => (
  <Link to="/foo" style={styles}>
    <div className="App-header" >
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  </Link>
);

export default muiThemeable()(header);
