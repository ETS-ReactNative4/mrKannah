import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import ParticlesBackground from '../../components/visualEffect/index';
import ProfilePicture from '../../components/profilePicture';
import MyTypist from '../../components/myTypist';


class Header extends Component {
  state = {typing: true};
  
  restartTyping = () => {
    this.setState({ typing: false }, () => {
      setTimeout(() => this.setState({ typing: true }), 0);
    });
  };

  render() {
    let size = this.props.mobileView ? 100 : 200;
    let height = this.props.mobileView ? '200px' : '350px';
    return (
      <div id="header" style={{backgroundColor: this.props.theme.palette.alternateCanvasColor, 
        height, color: this.props.theme.palette.text.alternate}}>
        <ParticlesBackground style={{position: 'absolute', left: 0}} height={height}/>
        <div style={{display: 'table', width: '80vw', maxWidth: '600px', height: '100%', margin: '0 auto'}}>
          <ProfilePicture size={size} style={{
            width: size + 20,
            display: 'table-cell',
            verticalAlign: 'middle',
            position: 'relative',
            padding: '10px'
          }}/>
          <div id="TextHolder" style={{display: 'table-cell', 
            verticalAlign: 'middle',
            position: 'relative',
            fontSize: this.props.mobileView ? '1em' : '1.2em',
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
          }}>
            <h1 style={{fontSize: this.props.mobileView ? '1.5em' : '2em'}}>Hi, I'm Fadee.</h1>
            <p style={{display: 'inline'}}>I engineer and build </p>
            <MyTypist/>
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

export default withTheme()(connect(mapStateToProps)(Header));
