import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom'
import Homepage from '../pages/homepage/index';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import Navbar from '../components/navBar/index';
import Footer from '../components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </div>
    )
  } 
}


function mapStateToProps(state) {
  return {
    currentRoute:  state.router.location.pathname,
  }
}

export default withRouter(connect(mapStateToProps)(App));
