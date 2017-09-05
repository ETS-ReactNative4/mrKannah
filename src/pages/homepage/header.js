import React from 'react';
import {Link} from 'react-router';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ParticlesBackground from '../../components/visualEffect/index';
import ProfilePicture from '../../components/misc/profilePicture';

import logo from './logo.svg';

const styles = {
  textDecoration: 'none',
};

const height = "350px";
const Header = (props) => (
  <Link to="/foo" style={styles}>
    <div className="App-header" style={{backgroundColor: '#222', height,  color: 'white'}}>
      <ParticlesBackground style={{position: 'absolute', left: 0}} height={height}/>
      <ProfilePicture size={200}/>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  </Link> 
);

export default muiThemeable()(Header);
