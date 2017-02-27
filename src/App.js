import React from 'react';
import logo from './logo.svg';
import './App.css';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Card, CardTitle, CardText} from 'material-ui/Card';

const App = (props) => (
  <div className="App">
    <div className="App-header" >
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro" style={{color: props.muiTheme.palette.textColor}}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div className="apple">
      <Card>
        <CardTitle title="Card Title" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    </div>
  </div>
);

export default muiThemeable()(App);
