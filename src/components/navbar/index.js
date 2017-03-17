import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { push } from 'react-router-redux';
// import logo from './logo.svg';

const changeHandler = (value, store) => {
  store.dispatch(push(value));
};


export default (props) => (
  <Tabs value={props.store.getState().value} onChange={(value) => changeHandler(value, props.store)}>
    <Tab label="Home" value="/" />
    <Tab label="Page2" value="/page2" />
  </Tabs>
)

