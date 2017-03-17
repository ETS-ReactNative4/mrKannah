import React from 'react';
import Header from './header';
import Body from './body';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../components/navbar/index';

const HomePage = (props) => (
  <div className="App">
    <Navbar store={props.store}/>
    <Header />
    <Body />
  </div>
);

export default muiThemeable()(HomePage);
