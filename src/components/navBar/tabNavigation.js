import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { LOCATION_CHANGE } from 'connected-react-router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DropDownMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withTheme} from "@material-ui/core/styles/index";

class TabNavigation extends Component {
  state = {};
  
  navigate = (value) => {
    this.props.dispatch({
      type: LOCATION_CHANGE,
      payload: {
        location: {
          pathname: value,
        },
        action: 'PUSH'
      }
    });
  };
  
  getParentRouteValue = (value = this.props.currentRoute) => {
    // route[0] is root route '/'
    let route = this.props.routes.filter((route) => value.startsWith(route.value))[1];
    if (!route || !route.nested) {
      return value;
    } else {
      return route.value;
    }
  };

  openDropdownMenu = (event, value) => {
    let nestedTab = {};
    nestedTab[value] = event.currentTarget;
    this.setState(nestedTab);
  };
  
  dismissDropdown = (event, value) => {
    event.stopPropagation();
    let state = {};
    state[this.getParentRouteValue(value)] = null;
    this.setState(state);
  }

  generateDropdown(route, currentRoute) {
    let routes = [route, ...route.nested].map((route) => {
      const color = route.value.toLowerCase() === currentRoute ?
        this.props.theme.palette.secondary.dark :
        this.props.theme.palette.text.primary;
      return (
        <MenuItem key={route.value} value={route.value} style={{color}} onClick={(event) => {
          this.dismissDropdown(event, route.value);
          this.navigate(route.value);
        }}>
          {route.label}
        </MenuItem>
      )
    });
    return (
      <DropDownMenu open={Boolean(this.state[route.value])}
                    value={route.value}
                    anchorEl={this.state[route.value]}
                    onClose={(event) => this.dismissDropdown(event, route.value)}
      >
        {routes}
      </DropDownMenu>
    )
  }

  render() {
    const {routes, currentRoute} = this.props;
    const tabs = routes.map((route) => {
      // if not nested return simple route
      if (!Array.isArray(route.nested)) {
        return (
          <Tab key={route.value} value={route.value} 
               label={route.label}
               onClick={() => this.navigate(route.value)}
          />
        )
      } 
      // else has nested
      const label = `${route.label} ▼`;
      return (
        <Tab key={route.value} value={route.value}
             onClick={(event) => this.openDropdownMenu(event, route.value)}
             label={
                <div>
                  <span style={{fontSize: '14px'}}>{label}</span>
                  {this.generateDropdown(route, currentRoute)}
                </div>
             } 
        />
      )
    });
    return (
      <Tabs value={this.getParentRouteValue()} centered variant="fullWidth"
            onChange={(event, value) => this.openDropdownMenu(value)}>
        {tabs}
      </Tabs>
    )
  }
}

TabNavigation.propTypes = {
  routes: PropTypes.array.isRequired,
};

TabNavigation.contextTypes = {
  store: PropTypes.object
};

function mapStateToProps(state) {
  return {
    currentRoute: state.router.location.pathname,
  }
}

export default connect(mapStateToProps)(withTheme()(TabNavigation));
