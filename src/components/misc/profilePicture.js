import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import picture from '../assests/fadee.jpg';

class ProfilePicture extends Component {
  render() {
    return (
      <div style={{}}>
        <Paper style={{width: this.props.size  + 'px', height: this.props.size + 'px', padding: '5px'}} zDepth={3} circle={true}>
          <Avatar src={picture} size={this.props.size - 10}/>
        </Paper>
      </div>
    )
  }
}

ProfilePicture.propTypes = {
  size: PropTypes.number.isRequired,
};

export default ProfilePicture;
