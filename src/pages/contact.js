import React from 'react';
import Form from '../components/form';
import Footer from '../components/footer';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Contact = (props) => (
  <div id="contact" style={{textAlign: 'center', background: props.muiTheme.palette.accent3Color}}>
    <Form/>
    <Footer />
  </div>
);

export default muiThemeable()(Contact);
