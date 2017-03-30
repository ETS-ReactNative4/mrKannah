import React from 'react';
import {Link} from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';

import logo from '../homepage/logo.svg';

const styles = {
  textDecoration: 'none',
};

const Header = (props) => (
  <Link to="/foo" style={styles}>
    <div className="App-header" >
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Social Tab TODO replace it</h2>
    </div>
  </Link>
);

export default muiThemeable()(Header);
