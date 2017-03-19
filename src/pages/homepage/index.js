import React from 'react';
import Header from './header';
import Body from './body';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../components/navbar/index';

const HomePage = () => (
  <div className="App">
    <Navbar />
    <Header />
    <Body />
  </div>
);

export default muiThemeable()(HomePage);
