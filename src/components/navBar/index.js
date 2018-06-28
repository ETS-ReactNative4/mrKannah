import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import theme from '../../muiTheme';
import logo from '../../icons/logo.svg';
import {withTheme} from "@material-ui/core/styles/index";
import TabNavigation from './tabNavigation';
import DrawerNavigation from './drawerNavigation';

const logoSize = {
  width: 60,
  height: 48
};

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

class Index extends Component {
  
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
  
  render() {
    return (
      <div id="navbar" style={{background: theme.palette.primary['700']}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <Link to="/"><img className="App-logo" src={logo} alt="logo" style={{height: logoSize.height, float: 'left'}}/></Link>
          {this.props.mobileView ?
            <DrawerNavigation routes={routes}/> :
            <TabNavigation routes={routes}/>
          }
        </div>
      </div>
    )
  }
}

Index.contextTypes = {
  store: PropTypes.object
};

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    currentRoute: state.routing.location.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(withTheme()(Index));
