import React, { Component } from 'react';
import { connect } from 'react-redux'
import muiThemeable from 'material-ui/styles/muiThemeable';


class form extends Component {
  
  componentDidMount(){
    this.init();
  }
  
  init() {
    let js, q, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm", b = "https://s3-eu-west-1.amazonaws.com/share.typeform.com/";
    if(!gi.call(d,id)) {
      js=ce.call(d,"script");
      js.id=id;
      js.src=b+"widget.js";
      q=gt.call(d,"script")[0];
      q.parentNode.insertBefore(js,q)
    }

    id = "typef_orm_share";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "share.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q)
    }
  }
  
  render() {
    return (
      <div>
          <a className="typeform-share button" href="https://fadeekannah.typeform.com/to/XRASMY" data-mode="popup" 
             style={{
               display: this.props.currentRoute !== '/contact' ? 'none' : this.props.mobileView ? 'inline-block' : 'none',
               textDecoration: 'none',
               backgroundColor: '#26ddaa',
               color: 'white',
               cursor: 'pointer',
               //font-family:Helvetica, Arial, sans-serif;font-size:23px;line-height:57.5px;text-align:center;
               margin: 0,
               height:57.5,
               padding:'0px 38px',
               borderRadius:28,
               maxWidth:'100%',
               //white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"
             }} target="_blank" > Launch
             </a>
          <div className="typeform-widget" data-url="https://fadeekannah.typeform.com/to/XRASMY" data-transparency="100" data-hide-headers="false" data-hide-footer="false" style={{
            display: this.props.currentRoute !== '/contact' ? 'none' : this.props.mobileView ? 'none' : 'inline-block',
            width: '100%',
            height: 500
          }}>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    currentRoute: state.routing.locationBeforeTransitions.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(muiThemeable()(form));
