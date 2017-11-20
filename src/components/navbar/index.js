import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {Link} from 'react-router';
import { push } from 'react-router-redux';

import theme from '../../muiTheme';
import logo from '../../pages/homepage/logo.svg';

import {Tabs, Tab} from 'material-ui/Tabs';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const logoSize = {
  width: 68,
  height: 48
};

const styles = {
  marginLeft: logoSize.width
};

export function navbarReducer(state, action) {
  switch (action.type) {
    case '@navigation/ToggleViewMode':
      return Object.assign({}, state, {mobileView: action.payload});
    case '@navigation/ToggleDrawer':
      return Object.assign({}, state, {openDrawer: action.payload});
    default:
      return state ? state : {mobileView: false, openDrawer: false}
  }
}

const routes = [{
  label: 'Home',
  value: '/',
// }, {
//   label: 'About',
//   value: '/about',
// }, {
//   label: 'Showcase',
//   value: '/showcase',
}, {
  label: 'Resume',
  value: '/resume',
}, {
  label: 'Contact',
  value: '/contact',
}];

class Navbar extends Component {

  componentDidMount() {
    this.handleResizeTabs();
    window.addEventListener('resize', this.handleResizeTabs, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeTabs, false);
  }

  handleResizeTabs = (e) => {
    const width = e ? e.target.innerWidth : window.innerWidth;
    if (width < 600 && !this.props.mobileView) {
      this.props.dispatch({type: '@navigation/ToggleViewMode', payload: true})
    } else if (width >= 600 && this.props.mobileView) {
      this.props.dispatch({type: '@navigation/ToggleViewMode', payload: false})
    }
  };
  
  navigate = (value, dismissDrawer) => {
    this.props.dispatch(push(value));
    if (dismissDrawer) this.toggleDrawer();
  };
  
  toggleDrawer = () => {
    this.props.dispatch({type: '@navigation/ToggleDrawer', payload: !this.props.openDrawer})
  };
  
  render() {
    return (
      <div id="navbar" style={{background: theme.palette.primary1Color}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <Link to="/"><img className="App-logo" src={logo} alt="logo" style={{height: logoSize.height, float: 'left'}}/></Link>
          {this.props.mobileView
            ?
            <div style={{textAlign: 'right'}}>
              <IconButton onTouchTap={this.toggleDrawer}><MenuIcon/></IconButton>
              <Drawer open={this.props.openDrawer} openSecondary={true} docked={false}
                      onRequestChange={this.toggleDrawer} style={{textAlign: 'center'}}>
                {routes.map((route) => (<MenuItem onTouchTap={() => this.navigate(route.value, true)}>{route.label}</MenuItem>))}
              </Drawer>
            </div>
            :
            <Tabs value={this.props.currentRoute}
                  onChange={(value) => this.navigate(value)}
                  style={styles}>
              {routes.map((route) => (<Tab label={route.label} value={route.value}/>))}
            </Tabs>
          }
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  mobileView: PropTypes.bool.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  currentRoute: PropTypes.string.isRequired,
};

Navbar.contextTypes = {
  store: PropTypes.object
};

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    openDrawer: state.navigation.openDrawer,
    currentRoute: state.routing.locationBeforeTransitions.pathname,
  }
}

export default connect(mapStateToProps)(Navbar);
