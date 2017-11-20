import React from 'react';
import Footer from '../../components/footer';
import Resume from '../../components/resume';
import muiThemeable from 'material-ui/styles/muiThemeable';


const ResumePage = (props) => (
  <div id="resume" style={{textAlign: 'center', background: props.muiTheme.palette.accent3Color}}>
    <Resume />
    <Footer />
  </div>
);

export default muiThemeable()(ResumePage);
