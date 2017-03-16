import React from 'react';
import Header from './header';
import Body from './body';
import muiThemeable from 'material-ui/styles/muiThemeable';

const MainPage = (props) => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

export default muiThemeable()(MainPage);
