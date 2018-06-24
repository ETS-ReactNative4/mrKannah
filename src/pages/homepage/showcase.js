import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
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
              mediaBackgroundStyle={{ backgroundColor: green['400'], height: '80px' }}
              contentStyle={{ backgroundColor: green['600'] }}
              title="CourseKey"
              subtitle="Working with an amazing team to improve the educational experience for students, instructors and administrators"
            />
            <Slide
              media={<img src={youtubeRedirector} alt="Youtube Redirector logo" />}
              mediaStyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: red['200'], height: '80px' }}
              contentStyle={{ backgroundColor: red['400'] }}
              title="YouTube Redirector"
              subtitle="A new revamped and upgraded version of my chrome extension for YouTube redirect to subscriptions page"
            />
            <Slide
              media={<img src={github} alt="Github logo" />}
              mediaStyle={{padding: '5px', height: '70px'}}
              mediaBackgroundStyle={{ backgroundColor: grey['400'], height: '80px' }}
              contentStyle={{ backgroundColor: grey['600'] }}
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
