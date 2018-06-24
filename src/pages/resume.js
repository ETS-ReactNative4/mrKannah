import React from 'react';
import PDFViewer from '../components/PDFViewer';
import muiThemeable from '@material-ui/core/styles/muiThemeable';


const ResumePage = (props) => (
  <div id="resume" style={{textAlign: 'center', background: props.muiTheme.palette.accent3Color}}>
    <PDFViewer url={'https://raw.githubusercontent.com/fadeenk/resume/master/resume.pdf'} />
  </div>
);

export default muiThemeable()(ResumePage);
