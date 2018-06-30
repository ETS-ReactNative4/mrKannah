import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel/lib';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import youtubeRedirector from '../../assests/you.png';
import github from '../../assests/GitHub.png';
import coursekey from '../../assests/ck.png';

const links = ['https://coursekeyeducation.com', 'https://chrome.google.com/webstore/detail/youtube-redirector/fnlklbjlpkkdnelohembgpdahpfpfcbp', 'https://github.com/fadeenk'];
class Showcase extends Component {
  
  componentWillMount() {
    this.setState({index: 0})
  }
  change = (index) => this.setState({index});
  start = () => window.open(links[this.state.index], '_newtab');
  render() {
    const height = this.props.mobileView ? '350px' : '400px';
    return (
      <div id="showcase" style={{background: this.props.theme.palette.secondary['500']}}>
        <div id="showcaseContainer" style={{maxWidth: '800px', width: '90%', margin: '0 auto', height, padding: '17px 0px 17px 17px'}}>
          <AutoRotatingCarousel open hideBackdrop={true} mobile={this.props.mobileView}
                                container={() => document.getElementById('showcaseContainer')}
                                label="Learn More" onChange={this.change} onStart={this.start} interval={7500}
          >
            <Slide
              media={<img src={coursekey} alt="CourseKey logo" />}
              mediastyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: green['400'], height: '80px' }}
              style={{ backgroundColor: green['600'] }}
              title="CourseKey"
              subtitle="Working with an amazing team to improve the educational experience for students, instructors and administrators"
            />
            <Slide
              media={<img src={youtubeRedirector} alt="Youtube Redirector logo" />}
              mediastyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: red['200'], height: '80px' }}
              style={{ backgroundColor: red['400'] }}
              title="YouTube Redirector"
              subtitle="A new revamped and upgraded version of my chrome extension for YouTube redirect to subscriptions page"
            />
            <Slide
              media={<img src={github} alt="Github logo" />}
              mediastyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: grey['400'], height: '80px' }}
              style={{ backgroundColor: grey['600'] }}
              title="Github Profile"
              subtitle="You can view my latest work for the open source community and side projects on my profile"
            />
          </AutoRotatingCarousel>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default withTheme()(connect(mapStateToProps)(Showcase));
