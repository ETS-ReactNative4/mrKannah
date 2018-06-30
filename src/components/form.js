import React, { Component } from 'react';
import { connect } from 'react-redux'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

// TODO Set up mail service

const styles = (theme) => ({
  activeButton: {
    backgroundColor: theme.palette.secondary['700'],
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    color: theme.palette.text.alternate,
  },
  topicCheckboxRoot: {
    color: theme.palette.secondary[700],
    '&$checked': {
      color: theme.palette.secondary[300],
    },
  },
});

const topics = [
  'I\'d like to work with you',
  'I have some feedback',
  'I\'m looking for some advice',
  'I\'d just like to chat',
  'Other',
];

const formSteps = 4;
const ThankYouStep = 5;

class form extends Component {
  state = {
    step: 0,
    formData: {
      name: '',
      email: '',
      topics: [],
      message: '',
      errors: [],
    },
    submitting: false,
    submitted: false,
  };
  
  componentWillMount() {
    // give access to this to the functions since they need access to state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.renderPrevButton = this.renderPrevButton.bind(this);
  }
  
  // remove error from the current step
  clearStepError() {
    const { formData, step } = this.state;
    if (formData.errors[step]) {
      formData.errors[step] = null;
      this.setState({formData});
    }
    return true;
  }

  isValid() {
    const { formData, step } = this.state;
    let field;
    switch (step) {
      case 1:
        field = formData.name.trim();
        break;
      case 2:
        field = formData.email.trim();
        break;
      case 3:
        field = formData.topics;
        break;
      case 4:
        field = formData.message.trim();
        break;
      default:
        field = null;
    }
    if (field !== null && field.length === 0) {
      formData.errors[step] = step === 3 ? 'Must select at least one topic' : 'Field is required';
      this.setState({formData});
      return false;
    }
    if (step === 2) {
      // eslint-disable-next-line no-useless-escape
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (field !== null && !field.match(emailFormat)) {
        formData.errors[step] = 'Must be a valid email';
        this.setState({formData});
        return false;
      }
    }
    return this.clearStepError();
  }
  
  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({formData}, () => this.isValid());
  }
  
  nextStep() {
    if (this.isValid()) {
      let step = this.state.step;
      if (step < formSteps) {
        step++;
      }
      this.setState({ step });
    }
  }
  
  prevStep() {
    let step = this.state.step;
    if (step > 1) {
      step--;
    }
    this.setState({ step });
  }
  
  handleSubmit() {
    this.setState({ submitting: false, submitted: false});
    if (this.state.step < formSteps) {
      this.nextStep();
    } else if (this.isValid()) {
      const self = this;
      this.setState({ submitting: true }, () => {
        axios({
          method: 'post',
          url: 'https://formspree.io/fadeekannah@gmail.com',
          data: {
            name: this.state.formData.name,
            email: this.state.formData.email,
            topics: this.state.formData.topics,
            message: this.state.formData.message,
          },
          headers: {
            Accept: 'application/json'
          }
        }).then(function (response) {
          if (response.status === 200 && response.data && response.data.success) {
            self.setState({ submitting: false, submitted: true, step: ThankYouStep})
          } else {
            throw response;
          }
        }).catch(function (error) {
          console.log(error);
          window.Raven.captureException(error, { submittionData: self.formData});
          self.setState({ submitting: false, submitted: true})
        });
      });
    }
  }

  handleClose() {
    this.setState({ submitting: false, submitted: false});
  }
  
  menuItems(values) {
    return topics.map((topic) => (
      <MenuItem key={topic} value={topic}>
        <Checkbox checked={values && values.indexOf(topic) > -1} color='default' classes={{
          root: this.props.classes.topicCheckboxRoot,
        }}/>
        {topic}
      </MenuItem>
    ));
  }

  renderStep() {
    const { step, formData} = this.state;
    let content = null;
    // defaults to welcome message
    switch (step) {
      case 1:
        content = (
          <Card>
            <CardContent>
              What's your name, stranger?<br />
              Mine's Fadee. Let's not be strangers for much longer.
            </CardContent>
            <TextField autoFocus
              label="Your Name"
              onChange={this.handleChange}
              style={{textAlign: 'left', width: '90%', marginBottom: '10px'}}
              value={formData.name} 
              required={true}
              error={Boolean(formData.errors[step])}
              helperText={formData.errors[step]}
              name="name"
            />
          </Card>
        );
        break;
      case 2:
        content = (
          <Card>
            <CardContent>
              What's the best email address for you, {formData.name}?<br />
              I'll use this to get back to you. No spam or unexpected newsletters here.
            </CardContent>
            <TextField
              label="Your Email"
              onChange={this.handleChange}
              style={{textAlign: 'left', width: '90%', marginBottom: '10px', height: 'auto'}}
              name="email"
              value={formData.email}
              required={true}
              error={Boolean(formData.errors[step])}
              helperText={formData.errors[step]}
            />
          </Card>
        );
        break;
      case 3:
        content = (
          <Card>
            <CardContent>
              What's your message about?<br />
              Think of this as like the subject field in an email. But already filled in for you.
            </CardContent>
            <FormControl error={Boolean(formData.errors[step])}
                         style={{textAlign: 'left', width: '90%', marginBottom: '10px'}}
            >
              <InputLabel htmlFor="topics">Select your Topic</InputLabel>
              <Select
                multiple={true}
                onChange={this.handleChange}
                name="topics"
                value={formData.topics}
                renderValue={selected => (
                  <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {selected.map(value => <Chip key={value} label={value} style={{margin: '4px'}}/>)}
                  </div>
                )}
                input={<Input id="topics" />}
              >
                {this.menuItems(formData.topics)}
              </Select>
              <FormHelperText>{formData.errors[step]}</FormHelperText>
            </FormControl>
          </Card>
        );
        break;
      case 4:
        content = (
          <Card>
            <CardContent>
              What's your message?<br />
              I prefer messages that are to the point. We're both busy people, and it's the best use of our time.
            </CardContent>
            <TextField
              multiline={true}
              rows={2}
              rowsMax={this.props.mobileView ? 10 : 25}
              label="Your Message"
              onChange={this.handleChange}
              style={{textAlign: 'left', width: '90%', marginBottom: '10px'}}
              name="message"
              value={formData.message}
              required={true}
              error={Boolean(formData.errors[step])}
              helperText={formData.errors[step]}
            />
          </Card>
        );
        break;
      case 5:
        content = (
          <Card>
            <CardHeader>Thank You</CardHeader>
            <CardContent>
              Thank you for reaching out and contacting me. I will contact you as soon as possible.
            </CardContent>
          </Card>
        );
        break;
      default:
        content = (
          <div style={{marginBottom: '10px'}}>
            <Card>
              <CardContent>
                I think you'll agree, there's nothing better than a message from a complete stranger. It's an opportunity to get to know someone and make a new friend.<br />
                If you're interested in me and what I do, get in touch.
              </CardContent>
            </Card>
          </div>
        );
        break;
    }
    if (step > 0 && step <= formSteps) {
      content = (
        <div id={`step${step}`}>
          {content}
          <Stepper activeStep={step-1} 
                   orientation={this.props.mobileView ? 'vertical' : 'horizontal'}
                   style={{background: 'none'}}
          >
            <Step>
              <StepLabel>Introduce yourself</StepLabel>
            </Step>
            <Step>
              <StepLabel>Provide contact info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Choose a topic</StepLabel>
            </Step>
            <Step>
              <StepLabel>Write your message</StepLabel>
            </Step>
          </Stepper>

        </div>
      )
    }
    return content;
  }

  renderPrevButton() {
    const {step, submitted} = this.state;
    if(step !== 0 && !submitted) {
      return (<Button variant="contained"
        onClick={this.prevStep}
        style={{ marginRight: '16px' }}
        disabled={step === 1}
      >previous</Button>)
    }
  }
  
  render() {
    const {step, submitted, submitting} = this.state;
    const styles = {
      color: this.props.theme.palette.text.primary,
      width: '90%',
      margin: '0 auto',
      padding: '1em 0',
      fontSize: this.props.mobileView ? '1.1em' : '1.3em',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };
    return (
      <div style={styles}>
        {this.renderStep()}
        {this.renderPrevButton()}
        <Button
          variant="contained"
          onClick={step < formSteps ? this.nextStep : this.handleSubmit}
          style={{display: submitted ? 'none' : 'inline-block'}}
          classes={{contained: this.props.classes.activeButton}}
          disabled={submitting}
        >{
          (submitting && 'Submitting...') ||
          (step === 0 && 'Shoot me a message') ||
          (step < formSteps ? 'Next' : 'Submit')
        }</Button>
        <Dialog
          open={submitted && step !== ThankYouStep}
          onExit={this.handleClose}
        >
          <DialogTitle>The Submission failed</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose}>Quit</Button>
            <Button onClick={this.handleSubmit}>Retry Again</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    currentRoute: state.routing.location.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(withTheme()(withStyles(styles)(form)));
