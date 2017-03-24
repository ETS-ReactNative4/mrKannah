import React from 'react';
import data from './objects';
import Child from './child';

function randomInt(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

const styles = {
  display: 'block',
  width: '30px',
  height: '30px',
  position: 'absolute',
  transform: 'translateZ(0px)',
};

class AntiGravity extends React.Component {
    componentWillMount() {
      this.state = {};
    }
    componentDidMount() {
    this.id = 0;
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
    this.build();
    this.build();
  }
  
  handleChildUnmount(id){
    let curState = this.state;
    delete curState[id];
    this.setState(curState);
    console.log(this.state);
  }
  
  build() {
    setInterval(() => {
      let curState = this.state;
      let bounds = document.getElementsByClassName('App-header')[0].getBoundingClientRect();
      console.log(bounds);
      curState[this.id] =
        <Child
          unmountMe={this.handleChildUnmount}
          id={this.id} svg={data[randomInt(0, data.length)]}
          coordinates={{"x": (Math.random() * window.innerWidth) - 50 , "y": bounds.height}}
          zeroY={-1 * (bounds.bottom + bounds.top)} 
          friction={(1 + Math.random() * 3)}
        />;
    this.setState(Object.assign({}, curState));
      this.id++;
   }, 200)
  }
  
  render(){
    return (
      <div>
        {Object.keys(this.state).map((key) =>
          <div key={key} style={styles}>
            {this.state[key]}
          </div>
        )}
      </div>
    )
  }

}

export default AntiGravity;
