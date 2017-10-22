import React, { Component }  from 'react';
import { connect } from 'react-redux'
import Homepage from '../pages/homepage/index';
import Contact from '../pages/contact/index';
import Navbar from '../components/navbar/index';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        {
          /\/[cC]ontact/.test(this.props.currentRoute) ? <Contact /> :
          this.props.currentRoute === '/' ? <Homepage/> : <Homepage/>
        }
      </div>
    )
  } 
}


function mapStateToProps(state) {
  return {
    currentRoute: state.routing.locationBeforeTransitions.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(App);