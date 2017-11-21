import React, { Component }  from 'react';
import { connect } from 'react-redux'
import Homepage from '../pages/homepage/index';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {
          /\/[rR]esume/.test(this.props.currentRoute) ? <Resume /> : 
          /\/[aA]bout/.test(this.props.currentRoute) ? <About /> :
          /\/[cC]ontact/.test(this.props.currentRoute) ? <Contact /> :
          this.props.currentRoute === '/' ? <Homepage/> : <Homepage/>
        }
        <Footer />
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
