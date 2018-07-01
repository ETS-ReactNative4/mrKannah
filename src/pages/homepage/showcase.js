import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import Slide from '../../components/carousel/Slide';
import Dots from '../../components/carousel/Dots';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import youtubeRedirector from '../../assests/you.png';
import github from '../../assests/GitHub.png';
import coursekey from '../../assests/ck.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const imgStyles = {padding: '5px', height: '70px', margin: '0 auto', display: 'block'};
const paragraphBody = {
  color: 'white',
  fontSize: '16px',
  lineHeight: '1.5em',
};
const transition = 'all 750ms';

class Showcase extends Component {
  
  slideCount = 3;
  componentWillMount() {
    this.setState({index: 0})
  }
  change = (index) => {
    this.setState({index});
  }

  decreaseIndex () {
    let index = this.state.index - 1;
    if (index < 0) index = this.slideCount -1; 
    this.setState({index})
  }

  increaseIndex () {
    let index = this.state.index + 1;
    if (index === this.slideCount) index = 0;
    this.setState({index})
  }

  render() {
    const slide = document.getElementById(`slide${this.state.index}`);
    // the number is the height of the first slide this is a hack till later
    const slideHeight= slide ? slide.clientHeight : 223;
    return (
      <div id="showcase" style={{background: this.props.theme.palette.secondary['500'], padding: '1em 0', overflow: 'hidden'}}>
        <div id='container' style={{maxWidth: '800px', width: '90%', margin: '0 auto'}}>
          <div id='carousel' style={{width: this.props.mobileView ? '100%' : '80%', margin: '0 auto', transition}}>
            <AutoPlaySwipeableViews animateHeight={true} style={{borderRadius: '10px'}} interval={7000}
                                    index={this.state.index} onChangeIndex={this.change}
            >
              <Slide id={0} style={{backgroundColor: green['600']}}
                     header={<img src={coursekey} alt="CourseKey logo" style={imgStyles} />}
                     headerBackColor={green['400']}
                     link='https://coursekeyeducation.com'
                     title='CourseKey'
                     content={<p style={paragraphBody}>
                       Working with an amazing team to improve the educational experience for students, instructors and administrators
                     </p>}
              />
              <Slide style={{ backgroundColor: red['400'] }}
                     id={1}
                     header={<img src={youtubeRedirector} alt="Youtube Redirector logo" style={imgStyles} />}
                     headerBackColor={red['200']}
                     link='https://chrome.google.com/webstore/detail/youtube-redirector/fnlklbjlpkkdnelohembgpdahpfpfcbp'
                     title='YouTube Redirector'
                     content={<p style={paragraphBody}>
                       A new revamped and upgraded version of my chrome extension for YouTube redirect to subscriptions page
                     </p>}
              />
              <Slide id={2} style={{ backgroundColor: grey['600'] }}
                     header={<img src={github} alt="Github logo" style={imgStyles} />}
                     headerBackColor={grey['400']}
                     link='https://github.com/fadeenk'
                     title='Github Profile'
                     content={<p style={paragraphBody}>
                       You can view my latest work for the open source community and side projects on my profile
                     </p>}
              />
            </AutoPlaySwipeableViews>
          </div>
          <div id='arrows' style={{
            display: 'flex',
            justifyContent: 'space-between',
            transition,
            height: 0,
            opacity: this.props.mobileView ? 0 : 1,
            position: 'relative',
            top: `calc((-${slideHeight}px - 48px) / 2)`,
          }}>
            <Button
              variant='fab'
              style={{width: this.props.mobileView ? 0 : 48, height: this.props.mobileView ? 0 : 48, transition}}
              onClick={() => this.decreaseIndex()}
            >
              <ArrowBackIcon style={{color: this.props.theme.palette.primary, width: this.props.mobileView ? 0 : 24, height: this.props.mobileView ? 0 : 24, transition}} />
            </Button>
            <Button
              variant='fab'
              style={{width: this.props.mobileView ? 0 : 48, height: this.props.mobileView ? 0 : 48, transition}}
              onClick={() => this.increaseIndex()}
            >
              <ArrowForwardIcon style={{color: this.props.theme.palette.primary, width: this.props.mobileView ? 0 : 24, height: this.props.mobileView ? 0 : 24, transition}} />
            </Button>
          </div>
          <Dots id='dots' style={{margin: '5px auto 0px'}}
            index={this.state.index}
            count={this.slideCount}
            onDotClick={(index) => this.setState({ index })}
          />
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

export default connect(mapStateToProps)(withTheme()(Showcase));
