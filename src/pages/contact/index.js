import React from 'react';
import Form from './form';
import Footer from '../../components/footer';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Contact = () => (
  <div id="contact" style={{textAlign: 'center'}}>
    <Form/>
    <Footer />
  </div>
);

export default muiThemeable()(Contact);
