import React from 'react';
import Form from '../components/form';
import { withTheme } from '@material-ui/core/styles';

const Contact = (props) => (
  <div id="contact" style={{textAlign: 'center', background: props.theme.palette.secondary['100']}}>
    <Form/>
  </div>
);

export default withTheme()(Contact);
