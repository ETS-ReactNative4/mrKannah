import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {Link} from 'react-router';
import { push } from 'react-router-redux';

import theme from '../muiTheme';
import logo from '../icons/logo.svg';

import {Tabs, Tab} from 'material-ui/Tabs';
import Drawer from 'material-ui/Drawer';
import DropDownMenu from 'material-ui/DropDownMenu';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {fade} from 'material-ui/utils/colorManipulator';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const logoSize = {
  width: 60,
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
}, {
  label: 'About',
  value: '/about',
  nested: [{
    label: 'Education',
    value: '/about/education',
  }]
}, {
  label: 'Resume',
  value: '/resume',
}, {
  label: 'Contact',
  value: '/contact',
}];

class Navbar extends Component {

  lastToggled = 0;
  
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
    let now = Date.now();
    if (now - this.lastToggled > 500) {
      this.lastToggled = now;
      this.props.dispatch({type: '@navigation/ToggleDrawer', payload: !this.props.openDrawer})
    }
  };
  
  getRouteFromString = (routeString) => {
    // route[0] is root route '/'
    return routes.filter((route) => routeString.startsWith(route.value))[1];
  };
  
  handleTabNavigation = (routeString) => {
    let route = this.getRouteFromString(routeString);
    if (!route || !route.nested) {
      this.navigate(routeString);
    }
  };
  
  handleActiveTab = () => {
    let route = this.getRouteFromString(this.props.currentRoute);
    if (!route || !route.nested) {
      return this.props.currentRoute;
    } else {
      return route.value;
    }
  };
  
  getDropdownStyles = (dropdownRoute) => {
    let route = this.getRouteFromString(this.props.currentRoute);
    let styles = {
      color: fade(theme.palette.alternateTextColor, 0.7),
      fill: fade(theme.palette.alternateTextColor, 0.7),
      height: logoSize.height + 'px', 
      lineHeight: logoSize.height + 'px',
    };
    let routeValue = '';
    if (!route || !route.nested) {
      routeValue = this.props.currentRoute;
    } else if (route) {
      routeValue = route.value;
    }
    if (dropdownRoute.startsWith(routeValue) && routeValue !== '/') {
      styles.color = theme.palette.alternateTextColor;
      styles.fill = theme.palette.alternateTextColor;
    }
    return styles;
  };
  
  getNestedRoutes = (route, tabs) => {
    if (route.nested) {
      if (!tabs) {
        return route.nested.map((nestedRoutes) => {
          return (<ListItem onTouchTap={() => this.navigate(nestedRoutes.value, true)}>{nestedRoutes.label}</ListItem>)
        });
      } else {
        return route.nested.map((nestedRoutes) => {
          return (<MenuItem
            value={nestedRoutes.value} 
            onTouchTap={() => this.navigate(nestedRoutes.value, true)}
            primaryText={nestedRoutes.label}
          />)
        })
      }
    } else {
      return []
    }
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
                      onRequestChange={this.toggleDrawer} style={{textAlign: 'left'}}>
                <List>
                  {routes.map((route) => {
                    let nestedRoutes = this.getNestedRoutes(route, false);
                    return <ListItem onClick={() => this.navigate(route.value, true)}
                                     nestedItems={nestedRoutes}
                    >{route.label}</ListItem>;
                  })}
                </List>
              </Drawer>
            </div>
            :
            <Tabs value={this.handleActiveTab()}
                  onChange={(value) => this.handleTabNavigation(value)}
                  style={styles}>
              {routes.map((route) => {
                if (Array.isArray(route.nested)) {
                  let dropdownStyles = this.getDropdownStyles(route.value);
                  return (
                    <Tab label={
                      <DropDownMenu value={route.value} 
                                    underlineStyle={{display: 'none'}} 
                                    labelStyle={dropdownStyles}
                                    iconStyle={Object.assign({top: '0px'}, dropdownStyles)}
                      >
                        <MenuItem value={route.value} primaryText={route.label} onTouchTap={() => this.navigate(route.value, true)} />
                        {this.getNestedRoutes(route, true)}
                      </DropDownMenu>
                    } value={route.value}/>
                  )
                } else {
                  return (<Tab label={route.label} value={route.value}/>);
                }
              })}
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
