import React from 'react';
import Particles from 'react-particles-js';
import {connect} from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import config from './config';


class ParticlesBackground extends React.Component {
  render(){
    config.particles.color.value = this.props.muiTheme.palette.accent1Color;
    config.particles.line_linked.color = this.props.muiTheme.palette.accent2Color;
    // TODO fix the mobile density
    config.particles.number.value = this.props.mobileView ? 1 : Math.round(Math.sqrt(screen.width * 15));
    return (
      <Particles style={this.props.style} height={this.props.height} params={config}/>
    )
  }

}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default muiThemeable()(connect(mapStateToProps)(ParticlesBackground));
