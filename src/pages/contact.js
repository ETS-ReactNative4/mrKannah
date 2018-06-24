import React from 'react';
import Form from '../components/form';
import muiThemeable from '@material-ui/core/styles/muiThemeable';

const Contact = (props) => (
  <div id="contact" style={{textAlign: 'center', background: props.muiTheme.palette.accent3Color}}>
    <Form/>
  </div>
);

export default muiThemeable()(Contact);
