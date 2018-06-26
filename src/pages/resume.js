import React from 'react';
import PDFViewer from '../components/PDFViewer';
import { withTheme } from '@material-ui/core/styles';


const ResumePage = (props) => (
  <div id="resume" style={{textAlign: 'center', background: props.theme.palette.secondary['100']}}>
    <PDFViewer url={'https://raw.githubusercontent.com/fadeenk/resume/master/resume.pdf'} />
  </div>
);

export default withTheme()(ResumePage);
