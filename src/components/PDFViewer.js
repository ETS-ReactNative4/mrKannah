import React from 'react';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import { Document, Page } from 'react-pdf';

class PDFViewer extends React.Component {
  render() {
    return (
      <div style={{width: '90%', maxWidth: this.props.mobileView ? 'none' : '800px', textAlign: 'center', margin: 'auto'}}>
        <Document file={{url: this.props.url}}>
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

export default withTheme()(connect(mapStateToProps)(PDFViewer));
