import React from 'react';
import Header from './header';
import About from './about';
import Showcase from './showcase';
import muiThemeable from 'material-ui/styles/muiThemeable';

const HomePage = () => (
  <div className="Homepage">
    <Header />
    <About />
    <Showcase />
  </div>
);

export default muiThemeable()(HomePage);
