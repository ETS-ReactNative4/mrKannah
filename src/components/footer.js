import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '../icons/github';
import LinkedInIcon from '../icons/linkedin';
import TwitterIcon from '../icons/twitter';


class Footer extends Component {
  render() {
    const styles = {
      color: this.props.theme.palette.text.alternate,
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
    const iconColor = this.props.theme.palette.text.alternate;
    return (
      <div style={{background: this.props.theme.palette.secondary['700'], padding: '10px 0'}}>
        <div style={styles} id="footer">
          <p>Handmade by me © 2017</p>
          <div>
            <a href="https://github.com/fadeenk" rel="noopener noreferrer" target="_blank">
              <IconButton style={iconButtonStyle}><GithubIcon nativeColor={iconColor} style={iconStyle}/></IconButton>
            </a>
            <a href="https://twitter.com/fadeenk" rel="noopener noreferrer" target="_blank">
              <IconButton style={iconButtonStyle}><TwitterIcon nativeColor={iconColor} style={iconStyle}/></IconButton>
            </a>
            <a href="https://www.linkedin.com/in/fadeek/" rel="noopener noreferrer" target="_blank">
              <IconButton style={iconButtonStyle}><LinkedInIcon nativeColor={iconColor} style={iconStyle}/></IconButton>
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

export default withTheme()(connect(mapStateToProps)(Footer));
