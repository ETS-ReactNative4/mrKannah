import React from 'react';
import Particles from 'react-particles-js';
import config from './config';


class ParticlesBackground extends React.Component {
  
  render(){
    return (
      <Particles style={this.props.style} height={this.props.height} params={config}/>
    )
  }

}

export default ParticlesBackground;
