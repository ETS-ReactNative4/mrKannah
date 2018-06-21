import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';


class About extends Component {
  render() {
    const styles = {
      color: this.props.muiTheme.palette.textColor,
      width: '90%',
      margin: '1em auto',
      fontSize: this.props.mobileView ? '1.1em' : '1.3em',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };
    
    return (
      <div id="about">
        <Card style={styles}>
          <CardText>
            <p>I currently am the Chief Technology Officer at <a href="https://coursekeyeducation.com/" rel="noopener noreferrer" target="_blank">CourseKey Education</a>, which is where my passion for technology, learning,
              and entrepreneurship converge. Additionally, I am the owner of Kannah Consulting and Software Services (licensed in city of El Cajon) which allows me to work with different companies and startups.</p>
            <p>I studied computer engineering and science at San Diego State University, where I co-founded student software development
              firm called <a target="_blank" rel="noopener noreferrer" href="http://hitechedventures.org/">HiTech EdVentures (HTEV)</a>.
              Over the years, I developed software and consulted for multiple industries, including Healthcare, Home
              Services, Entertainment, Automobile, and Education.</p>
            <p>Currently I am accepting freelance work, I'd love to get coffee and get to know you, so don’t hesitate
              to get in touch.</p>
          </CardText>
        </Card>
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
