import React from 'react';
import {Link} from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AntiGravity from '../../components/visualEffect/index';

import logo from './logo.svg';

const styles = {
  textDecoration: 'none',
};

const Header = (props) => (
  <Link to="/foo" style={styles}>
    <div className="App-header" >
      <AntiGravity height="390px"/>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  </Link>
);

export default muiThemeable()(Header);
