import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {withTheme} from "@material-ui/core/styles/index";

class DrawerNavigation extends Component {
  state = {
    openDrawer: false,
  };
  
  lastToggled = 0;
  
  componentWillMount() {
    let updateState = {};
    this.props.routes.filter((route) => route.nested).forEach((route) => {
      updateState[route.value] = true;
    });
    this.setState(updateState);
  }
  navigate = (value) => {
    this.props.dispatch(push(value));
    this.toggleDrawer();
  };

  toggleDrawer = () => {
    let now = Date.now();
    if (now - this.lastToggled > 500) {
      this.lastToggled = now;
      this.setState({openDrawer: !this.state.openDrawer})
    }
  };

  toggleMenu = (event, value) => {
    event.stopPropagation();
    let state = {};
    state[value] = !this.state[value];
    this.setState(state);
  }

  getMenuItemForRoute = (route, nested) => {
    const color = route.value.toLowerCase() === this.props.currentRoute ?
      this.props.theme.palette.secondary.dark :
      this.props.theme.palette.text.primary;
    return (
      <MenuItem key={route.value} value={route.value}
                style={{color}}
                onClick={() => this.navigate(route.value)}
      >
        <span style={{paddingLeft: nested ? '18px' : 0}}>{route.label}</span>
      </MenuItem>
    )
  }
  
  getMenuItemsForRouteWithNested = (route) => {
    const subItems = route.nested.map((subRoute) => {
      return this.getMenuItemForRoute(subRoute, true);
    });
    const color = route.value.toLowerCase() === this.props.currentRoute ?
      this.props.theme.palette.secondary.dark :
      this.props.theme.palette.text.primary;
    const mainRoute =
      <MenuItem key={route.value} value={route.value}
                style={{color, marginRight: '40px'}}
                onClick={() => this.navigate(route.value)}
      >
        {route.label}
        <IconButton onClick={(event) => this.toggleMenu(event, route.value)}
                    style={{width: '32px', height: '32px', zIndex: 1000, color, position: 'fixed', right: '5px'}}
        >
          {this.state[route.value] ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </MenuItem>;
    return [
      mainRoute,
      <Collapse key={route.label} in={this.state[route.value]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>{subItems}</List>
      </Collapse>
    ];
  }

  render() {
    const {routes} = this.props;
    const items = routes.map((route) => {
      if (!Array.isArray(route.nested)) {
        return this.getMenuItemForRoute(route, false);
      }
      return this.getMenuItemsForRouteWithNested(route);
    });
    return (
      <div style={{textAlign: 'right'}}>
        <IconButton onClick={this.toggleDrawer}><MenuIcon/></IconButton>
        <Drawer open={this.state.openDrawer} anchor="right"
                onClose={this.toggleDrawer} style={{textAlign: 'left'}}>
          <List>
            {items}
          </List>
        </Drawer>
      </div>
    )
  }
}

DrawerNavigation.propTypes = {
  routes: PropTypes.array.isRequired,
};

DrawerNavigation.contextTypes = {
  store: PropTypes.object
};

function mapStateToProps(state) {
  return {
    currentRoute: state.routing.location.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(withTheme()(DrawerNavigation));
