import React, {PropTypes} from 'react';

let colors = ['#3E82F7', '#8491A3', '#2DA94F', '#2DA94F', '#FDBD00', '#ED412D'];

// http://codepen.io/plasm/pen/XMeZXV

class Child extends React.Component {
  constructor(props){
    super(props);
    this.svg = this.props.svg;
    this.steps = window.innerHeight/2;
    this.friction = this.props.friction;
    this.coordinates = this.props.coordinates;
    this.position = this.coordinates.y;
    this.rotation = Math.random() > 0.5 ? "-" : "+";
    this.scale = 0.5 + Math.random();
    this.siner = 200 * Math.random();
    this.styles = {
      width: '30px',
      height: '30px',
      display: 'block',
      color: colors[Math.floor(Math.random() * colors.length)],
      position: 'absolute',
      top: this.position,
      left: this.coordinates.x,
    };
    this.move();
  }

  
  move(){
    let old = {
      x: this.coordinates.x,
      y: this.position
    };
    this.friction = this.position - this.friction * 5;
    let left = old.x + Math.sin(this.position*Math.PI/this.steps) * this.siner;
    this.coordinates.x = left;
    left = old.x - left;
    while (this.coordinates.x > window.innerWidth - 100) {
      this.coordinates.x -= 150;
    }
    let style = this.styles;

    style.transform = 
      "translateX("+left+"px) translateY(-"+this.friction+"px) scale(" + this.scale + ") rotate("+(this.rotation)+(this.position + 30)+"deg)";
    this.styles = Object.assign({}, style);
    
    if(this.position < -(30)){
      // this.dismiss();
    }else{
      requestAnimationFrame(this.move.bind(this));
    }
  }
  
  dismiss() {
    this.props.unmountMe(this.props.id);
  }
  
  render()  {
    return (
      <img src={this.svg} style={Object.assign({}, this.styles)} role='presentation' />
    )
  }
}

Child.propTypes = {
  svg: PropTypes.string.isRequired,
  coordinates: PropTypes.object.isRequired,
  friction: PropTypes.number.isRequired,
  unmountMe: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};


export default Child;
