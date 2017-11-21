import React from 'react';
import Footer from '../components/footer';
import PDFViewer from '../components/PDFViewer';
import muiThemeable from 'material-ui/styles/muiThemeable';


const ResumePage = (props) => (
  <div id="resume" style={{textAlign: 'center', background: props.muiTheme.palette.accent3Color}}>
    <PDFViewer url={'https://raw.githubusercontent.com/fadeenk/resume/master/resume.pdf'} />
    <Footer />
  </div>
);

export default muiThemeable()(ResumePage);
