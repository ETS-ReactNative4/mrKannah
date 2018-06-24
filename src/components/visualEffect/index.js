import React from 'react';
import Particles from 'react-particles-js';
import {connect} from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import config from './config';


class ParticlesBackground extends React.Component {
  componentWillMount() {
    this.setState({initialRender: true})
  }
  
  render(){
    config.particles.color.value = this.props.muiTheme.palette.accent1Color;
    config.particles.line_linked.color = this.props.muiTheme.palette.accent2Color;
    config.particles.number.value = this.props.mobileView ? 20 : 100;
    if (!this.state.initialRender) {
      return (
        <Particles style={this.props.style} height={this.props.height} params={config}/>
      )
    } else {
      return (
        <div style={{height: this.props.height, width: '100%'}}></div>
      )
    }
  }
  
  componentDidMount() {
    this.setState({initialRender: false});
  }

}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default withTheme()(connect(mapStateToProps)(ParticlesBackground));
