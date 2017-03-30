import React, { Component }  from 'react';
import { connect } from 'react-redux'
import Homepage from '../pages/homepage/index';
import Contact from '../pages/contact/index';
import Navbar from '../components/navbar/index';
import Form from '../pages/contact/form';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Form/> {/* this is needed to load the form */}
        {
          this.props.currentRoute === '/contact' ? <Contact /> :
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
