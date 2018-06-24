import React from 'react';
import Header from './header';
import About from './about';
import Showcase from './showcase';
import muiThemeable from '@material-ui/core/styles/muiThemeable';

const HomePage = (props) => (
  <div className="Homepage" style={{background: props.muiTheme.palette.accent3Color}}>
    <Header />
    <About />
    <Showcase />
  </div>
);

export default muiThemeable()(HomePage);
