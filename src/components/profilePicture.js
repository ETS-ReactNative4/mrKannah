import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import picture from '../assests/fadee.jpg';

class ProfilePicture extends Component {
  render() {
    let size = this.props.size;
    let transition = 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
    return (
      <div id="avatar" style={this.props.style}>
        <Paper zdepth={3} style={{width: `${size}px`, height: `${size}px`, padding: '5px', borderRadius: '50%', transition}}>
          <Avatar src={picture}
                  style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    transition
                  }} />
        </Paper>
      </div>
    )
  }
}

ProfilePicture.propTypes = {
  size: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default connect(mapStateToProps)(ProfilePicture);
