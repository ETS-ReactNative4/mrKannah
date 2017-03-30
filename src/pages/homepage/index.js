import React from 'react';
import Header from './header';
import About from './about';
import Showcase from './showcase';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer';

const HomePage = () => (
  <div className="Homepage">
    <Header />
    <About />
    <Showcase />
    <Footer />
  </div>
);

export default muiThemeable()(HomePage);
