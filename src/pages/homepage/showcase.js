import React, {Component} from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { green400, green600, grey400, grey600, red200, red400 } from 'material-ui/styles/colors';
import youtubeRedirector from '../../components/assests/you.png';
import github from '../../components/assests/GitHub.png';
import coursekey from '../../components/assests/ck.png';

const links = ['https://coursekeyeducation.com', 'https://chrome.google.com/webstore/detail/youtube-redirector/fnlklbjlpkkdnelohembgpdahpfpfcbp', 'https://github.com/fadeenk'];
class Showcase extends Component {
  
  componentWillMount() {
    this.setState({index: 0})
  }
  change = (index) => this.setState({index});
  start = () => window.open(links[this.state.index], '_newtab');
  render() {
    const height = this.props.mobileView ? '430px' : '400px';
    return (
      <div id="showcase" style={{background: this.props.muiTheme.palette.accent1Color}}>
        <div style={{maxWidth: '800px', width: '90%', margin: '0 auto', height}}>
          <AutoRotatingCarousel open style={{width: '100%', height, position: 'relative', background: 'none'}}
                                contentStyle={{width: '60%', maxWidth: '700px', height: 'calc(100% - 96px)', margin: '0 auto',
                                  maxHeight: '600px', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}
                                label="Learn More" onChange={this.change} onStart={this.start} interval={7500}
          >
            <Slide
              media={<img src={coursekey} alt="CourseKey logo" />}
              mediaStyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: green400, height: '80px' }}
              contentStyle={{ backgroundColor: green600 }}
              title="CourseKey"
              subtitle="Working with an amazing team to improve the educational experience for students, instructors and administration"
            />
            <Slide
              media={<img src={youtubeRedirector} alt="Youtube Redirector logo" />}
              mediaStyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: red200, height: '80px' }}
              contentStyle={{ backgroundColor: red400 }}
              title="YouTube Redirector"
              subtitle="A new revamped and upgraded version of my chrome extension for YouTube"
            />
            <Slide
              media={<img src={github} alt="Github logo" />}
              mediaStyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: grey400, height: '80px' }}
              contentStyle={{ backgroundColor: grey600 }}
              title="Github Profile"
              subtitle="You can few my latest work for the open source community and side projects on my profile"
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

export default muiThemeable()(connect(mapStateToProps)(Showcase));
