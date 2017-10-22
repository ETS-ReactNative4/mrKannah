import React, {Component} from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import GithubIcon from './icons/github';
import LinkedInIcon from './icons/linkedin';
import TwitterIcon from './icons/twitter';


class Footer extends Component {
  render() {
    const styles = {
      color: this.props.muiTheme.palette.alternateTextColor,
      textAlign: 'center',
      width: '90%',
      margin: '0 auto',
      fontSize: this.props.mobileView ? '0.9em' : '1em',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };

    const iconStyle = {
      width: this.props.mobileView ? '24px' : '32px',
      height: this.props.mobileView ? '24px' : '32px',
      padding: 0,
      margin: 0,
    };
    const iconButtonStyle = {
      width: this.props.mobileView ? '24px' : '32px',
      height: this.props.mobileView ? '24px' : '32px',
      padding: 0,
      margin: '0 10px',
    };
    const iconColor = this.props.muiTheme.palette.alternateTextColor;
    return (
      <div style={{background: this.props.muiTheme.palette.accent2Color, padding: '10px 0'}}>
        <div style={styles} id="footer">
          <p>Handmade by me © 2017</p>
          <div>
            <a href="https://github.com/fadeenk" rel="noopener noreferrer" target="_blank">
              <IconButton style={iconButtonStyle} iconStyle={iconStyle}><GithubIcon color={iconColor} /></IconButton>
            </a>
            <a href="https://twitter.com/fadeenk" rel="noopener noreferrer" target="_blank">
              <IconButton style={iconButtonStyle} iconStyle={iconStyle}><TwitterIcon color={iconColor} /></IconButton>
            </a>
            <a href="https://www.linkedin.com/in/fadeek/" rel="noopener noreferrer" target="_blank">
              <IconButton style={iconButtonStyle} iconStyle={iconStyle}><LinkedInIcon color={iconColor} /></IconButton>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default muiThemeable()(connect(mapStateToProps)(Footer));