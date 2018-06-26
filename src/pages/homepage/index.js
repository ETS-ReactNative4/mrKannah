import React from 'react';
import Header from './header';
import About from './about';
import Showcase from './showcase';
import { withTheme } from '@material-ui/core/styles';

const HomePage = (props) => (
  <div className="Homepage" style={{background: props.theme.palette.secondary['100']}}>
    <Header />
    <About />
    {/*<Showcase />*/}
  </div>
);

export default withTheme()(HomePage);
