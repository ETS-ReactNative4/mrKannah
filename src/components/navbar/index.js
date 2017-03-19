import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router';
import { push } from 'react-router-redux';

import theme from '../../muiTheme';
import logo from '../../pages/homepage/logo.svg';

import {Tabs, Tab} from 'material-ui/Tabs';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

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
        <Link to="/"><img src={logo} alt="logo" style={{height: logoSize.height, left: 0, position: 'absolute'}}/></Link>
        {this.props.mobileView
          ?
          <div style={{textAlign: 'right'}}>
            <IconButton iconClassName="material-icons" onTouchTap={this.toggleDrawer}>menu</IconButton>
            <Drawer open={this.props.openDrawer} openSecondary={true} docked={false}
                    onRequestChange={this.toggleDrawer} style={{textAlign: 'center'}}>
              <MenuItem onTouchTap={() => this.navigate('/', true)}>Home</MenuItem>
              <MenuItem onTouchTap={() => this.navigate('/About', true)}>About</MenuItem>
              <MenuItem onTouchTap={() => this.navigate('/Showcase', true)}>Showcase</MenuItem>
              <MenuItem onTouchTap={() => this.navigate('/Contact', true)}>Contact</MenuItem>
            </Drawer>
          </div>
          :
          <Tabs value={this.props.currentRoute}
                onChange={(value) => this.navigate(value)}
                style={styles}>
            <Tab label="Home" value="/" />
            <Tab label="About" value="/About" />
            <Tab label="Showcase" value="/Showcase" />
            <Tab label="Contact" value="/Contact" />
          </Tabs>
        }
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
  store: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    openDrawer: state.navigation.openDrawer,
    currentRoute: state.routing.locationBeforeTransitions.pathname,
  }
}

export default connect(mapStateToProps)(Navbar);
