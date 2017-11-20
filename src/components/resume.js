import React from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Document, Page } from 'react-pdf';

class Resume extends React.Component {
  render() {
    return (
      <div style={{width: '90%', maxWidth: this.props.mobileView ? 'none' : '800px', textAlign: 'center', margin: 'auto'}}>
        <Document file={{url: 'https://raw.githubusercontent.com/fadeenk/resume/master/resume.pdf'}}>
          <Page pageNumber={1} width={this.props.mobileView ? window.screen.width * .9 : 800}/>
        </Document>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default muiThemeable()(connect(mapStateToProps)(Resume));
