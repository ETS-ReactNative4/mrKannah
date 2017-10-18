import React, {Component} from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';


class About extends Component {
  render() {
    const styles = {
      color: this.props.muiTheme.palette.textColor,
      width: '90%',
      margin: '0 auto',
      fontSize: this.props.mobileView ? '1.1em' : '1.3em',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };
    
    return (
      <div style={styles} id="about">
        <p>
          I currently am the Chief Technology Officer at <a href="https://coursekeyeducation.com/" target="_blank">CourseKey Education</a>, which is where my passion for technology, learning,
          and entrepreneurship converge.
          I studied computer engineering and science at San Diego State University, where I co-founded student development
          firm called <a target="_blank" href="http://hitechedventures.org/">HiTech EdVentures (HTEV)</a>.
          Over the years, I developed software and consulted for multiple industries, including Healthcare, House
          Services, Entertainment, Automobile, and Education.
          Additionally, I worked as a consultant and contractor providing my services to different companies and startups
          through my personal business.
          Currently I am not accepting freelance work, but I'd love to get coffee and get to know you, so don’t hesitate
          to get in touch.
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default muiThemeable()(connect(mapStateToProps)(About));
