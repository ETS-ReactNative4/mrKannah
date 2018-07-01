import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import picture from '../assests/fadee.jpg';

class ProfilePicture extends Component {
  render() {
    const {size, style} = this.props;
    return (
      <div id="avatar" style={style}>
        <Paper zdepth={3} style={{width: `${size}px`, height: `${size}px`, padding: '5px', borderRadius: '50%', transition: style.transition}}>
          <Avatar src={picture} style={{height: `${size}px`, width: `${size}px`, transition: style.transition}} />
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
