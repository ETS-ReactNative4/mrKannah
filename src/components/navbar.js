import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

import theme from '../muiTheme';
import logo from '../icons/logo.svg';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DropDownMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {fade} from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {withTheme} from "@material-ui/core/styles/index";

const logoSize = {
  width: 60,
  height: 48
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
    label: 'Software Development',
    value: '/about/softwareDevelopment',
  },{
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
  state = {
    nestedTab: {},
    drawerNestedItemsExpanded: true,
  };
  
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
    if (now - this.lastToggled > 500 && this.props.mobileView) {
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

  handleTabNestedMenu = (event, value) => {
    let nestedTab = {};
    nestedTab[value] = event.currentTarget;
    this.setState({nestedTab});
  }
  
  getNestedRoutes = (route, tabs) => {
    if (route.nested) {
      if (!tabs) {
        return route.nested.map((nestedRoutes) => {
          let color = nestedRoutes.value.toLowerCase() === this.props.currentRoute ?
            this.props.theme.palette.secondary.dark :
            this.props.theme.palette.text.primary;
          return (
            <MenuItem key={nestedRoutes.value}
                      value={nestedRoutes.value}
                      style={{color}}
                      onClick={() => this.navigate(nestedRoutes.value, true)}
            >
              <span style={{paddingLeft: '18px'}}>{nestedRoutes.label}</span>
            </MenuItem>
          )
        });
      } else {
        return route.nested.map((nestedRoutes) => {
          let color = nestedRoutes.value.toLowerCase() === this.props.currentRoute ?
            this.props.theme.palette.secondary.dark :
            this.props.theme.palette.text.primary;
          return (<MenuItem key={nestedRoutes.value}
                            value={nestedRoutes.value}
                            style={{color}}
                            onClick={() => this.navigate(nestedRoutes.value, true)}
          >
            {nestedRoutes.label}
          </MenuItem>)
        })
      }
    } else {
      return []
    }
  };
  
  render() {
    let items = [];
    routes.forEach((route) => {
      let nestedRoutes = this.getNestedRoutes(route, false);
      let color = route.value.toLowerCase() === this.props.currentRoute ?
        this.props.theme.palette.secondary.dark :
        this.props.theme.palette.text.primary;
      let hasNested = nestedRoutes.length > 0;
      items.push(
        <MenuItem key={route.value}
                  value={route.value}
                  style={{color, marginRight: hasNested ? '40px' : '0px'}}
                  onClick={() => this.navigate(route.value, true)}
        >
          {route.label} {hasNested ?
            <IconButton onClick={(event) => {
                                  event.stopPropagation();
                                  this.setState({drawerNestedItemsExpanded: !this.state.drawerNestedItemsExpanded});
                                }}
                        style={{width: '32px', height: '32px', zIndex: 1000, color, position: 'fixed', right: '5px'}}
            > 
                {this.state.drawerNestedItemsExpanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton> :
            null
          }
        </MenuItem>
      );
      if (nestedRoutes.length > 0) {
        items.push(<Collapse key={route.label} in={this.state.drawerNestedItemsExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>{nestedRoutes}</List>
          </Collapse>
        );
      }
    });
    return (
      <div id="navbar" style={{background: theme.palette.primary['700']}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <Link to="/"><img className="App-logo" src={logo} alt="logo" style={{height: logoSize.height, float: 'left'}}/></Link>
          {this.props.mobileView
            ?
            <div style={{textAlign: 'right'}}>
              <IconButton onClick={this.toggleDrawer}><MenuIcon/></IconButton>
              <Drawer open={this.props.openDrawer} anchor="right"
                      onClose={this.toggleDrawer} style={{textAlign: 'left'}}>
                <List>
                  {items}
                </List>
              </Drawer>
            </div>
            :
            <Tabs value={this.handleActiveTab()} centered fullWidth
                  onChange={(event, value) => this.handleTabNavigation(value)}
                  style={{marginLeft: logoSize.width}}>
              {routes.map((route) => {
                if (Array.isArray(route.nested)) {
                  let color = route.value.toLowerCase() === this.props.currentRoute ?
                    this.props.theme.palette.secondary.dark :
                    this.props.theme.palette.text.primary;
                  return (
                    <Tab key={route.value}
                     onClick={(event) => this.handleTabNestedMenu(event, route.value)} 
                     label={
                      <div>
                        <span style={{fontSize: '14px'}}>{route.label} ▼</span>
                        <DropDownMenu open={Boolean(this.state.nestedTab[route.value])}
                                      value={route.value}
                                      anchorEl={this.state.nestedTab[route.value]}
                                      onClose={(event) => {
                                        event.stopPropagation();
                                        this.setState({nestedTab: {}})
                                      }}
                        >
                          <MenuItem value={route.value} style={{color}} onClick={() => this.navigate(route.value, true)}>
                            {route.label}
                          </MenuItem>
                          {this.getNestedRoutes(route, true)}
                        </DropDownMenu>
                      </div>
                    } value={route.value}/>
                  )
                } else {
                  return (<Tab key={route.value} label={route.label} value={route.value}/>);
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
    currentRoute: state.routing.location.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(withTheme()(Navbar));
