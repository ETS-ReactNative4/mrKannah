import React from 'react';
import Header from './header';
import About from './about';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../components/navbar/index';

const HomePage = () => (
  <div className="App">
    <Navbar />
    <Header />
    <About />
  </div>
);

export default muiThemeable()(HomePage);
