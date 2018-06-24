import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Step, Stepper, StepLabel} from '@material-ui/core/Stepper';
import axios from 'axios';
import {Card, CardText, CardTitle} from '@material-ui/core/Card';
import {Dialog} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { withTheme } from '@material-ui/core/styles';

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
  constructor() {
    super();
    this.state = {
      step: 0,
      formData: {
        name: '',
        email: '',
        topics: [],
        message: '',
      },
      submitting: false,
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.renderPrevButton = this.renderPrevButton.bind(this);
    this.handleSelectTopic = this.handleSelectTopic.bind(this);
  }
  
  componentWillMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isTopicSelected', (value) => {
      return value === this.state.formData.topics && value.length !== 0;
    });
  }


  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }
  
  handleSelectTopic(event, key, payload) {
    const { formData } = this.state;
    formData.topics = payload;
    this.setState({ formData });
  }

  handleBlur(event) {
    this.refs[event.target.name].validate(event.target.value);
  }

  nextStep() {
    if (this.refs.form.walk(this.refs.form.childs)) {
      let step = this.state.step;
      if (step < formSteps) {
        step++;
      }
      this.setState({ step }, () => this.refs.form.walk(this.refs.form.childs));
    }
  }
  
  prevStep() {
    let step = this.state.step;
    if (step > 1) {
      step--;
    }
    this.setState({ step }, () => this.refs.form.walk(this.refs.form.childs));
  }
  
  handleSubmit() {
    this.setState({ submitting: false, submitted: false});
    if (this.state.step < formSteps) {
      this.nextStep();
    } else {
      const self = this;
      this.setState({ submitting: true }, () => {
        axios({
          method: 'post',
          url: 'https://formspree.io/fadeekannah@gmail.com',
          data: {
            name: this.state.formData.name,
            email: this.state.formData.email,
            topics: this.state.formData.topics.join(', '),
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
          self.setState({ submitting: false, submitted: true})
        });
      });
    }
  }

  handleClose() {
    this.setState({ submitting: false, submitted: false});
  }
  
  menuItems(values) {
    return topics.map((topic, index) => (
      <MenuItem
        key={topic}
        insetChildren={true}
        checked={values && values.indexOf(topic) > -1}
        value={topic}
        primaryText={topic}
      />
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
            <CardText>
              What's your name, stranger?<br />
              Mine's Fadee. Let's not be strangers for much longer.
            </CardText>
            <TextValidator
              ref="name"
              floatingLabelText="Your Name"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              style={{textAlign: 'left', width: '90%', marginBottom: '10px'}}
              name="name"
              value={formData.name}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Card>
        );
        break;
      case 2:
        content = (
          <Card>
            <CardText>
              What's the best email address for you, {formData.name}?<br />
              I'll use this to get back to you. No spam or unexpected newsletters here.
            </CardText>
            <TextValidator
              ref="email"
              floatingLabelText="Your Email"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              style={{textAlign: 'left', width: '90%', marginBottom: '10px'}}
              name="email"
              value={formData.email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'please provide a valid email']}
            />
          </Card>
        );
        break;
      case 3:
        content = (
          <Card>
            <CardText>
              What's your message about?<br />
              Think of this as like the subject field in an email. But already filled in for you.
            </CardText>
            <SelectValidator
              multiple={true}
              ref="topics"
              hintText="Select your Topic"
              onChange={this.handleSelectTopic}
              style={{textAlign: 'left', width: '90%', marginBottom: '10px'}}
              name="topics"
              value={formData.topics}
              validators={['isTopicSelected']}
              errorMessages={['a topic must be selected']}
            >
              {this.menuItems(formData.topics)}
            </SelectValidator>
          </Card>
        );
        break;
      case 4:
        content = (
          <Card>
            <CardText>
              What's your message?<br />
              I prefer messages that are to the point. We're both busy people, and it's the best use of our time.
            </CardText>
            <TextValidator
              multiLine={true}
              rows={2}
              ref="message"
              floatingLabelText="Your Message"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              style={{textAlign: 'left', width: '90%', marginBottom: '10px'}}
              name="message"
              value={formData.message}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Card>
        );
        break;
      case 5:
        content = (
          <Card>
            <CardTitle>Thank You</CardTitle>
            <CardText>
              Thank you for reaching out and contacting me. I will contact you as soon as possible.
            </CardText>
          </Card>
        );
        break;
      default:
        content = (
          <div style={{marginBottom: '10px'}}>
            <Card>
              <CardText>
                I think you'll agree, there's nothing better than a message from a complete stranger. It's an opportunity to get to know someone and make a new friend.<br />
                If you're interested in me and what I do, get in touch.
              </CardText>
            </Card>
          </div>
        );
        break;
    }
    if (step > 0 && step <= formSteps) {
      content = (
        <div id={`step${step}`}>
          {content}
          <Stepper activeStep={step-1} orientation={this.props.mobileView ? 'vertical' : 'horizontal'}>
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
        label="previous"
        onClick={this.prevStep}
        style={{ marginRight: '16px' }}
        primary
        disabled={step === 1}
      />)
    }
  }
  
  render() {
    const {step, submitted, submitting} = this.state;
    const styles = {
      color: this.props.theme.palette.textColor,
      width: '90%',
      margin: '0 auto',
      padding: '1em 0',
      fontSize: this.props.mobileView ? '1.1em' : '1.3em',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };
    return (
      <ValidatorForm
        style={styles}
        ref="form"
        onSubmit={this.handleSubmit}
        instantValidate={false}
      >
        {this.renderStep()}
        {this.renderPrevButton()}
        <Button
          variant="contained"
          label={
            (submitting && 'Submitting...') ||
            (step === 0 && 'Shoot me a message') ||
            (step < formSteps ? 'Next' : 'Submit')
          }
          onClick={step < formSteps ? this.nextStep : this.handleSubmit}
          secondary
          style={{display: submitted ? 'none' : 'inline-block'}}
          disabled={submitting}
        />
        <Dialog
          title="The Submission failed"
          actions={[<Button
            label="Quit"
            primary={true}
            onClick={this.handleClose}
          />,
            <Button
              label="Retry Again"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleSubmit}
            />]}
          modal={true}
          open={submitted && step !== ThankYouStep}
          onRequestClose={this.handleClose}
        />
      </ValidatorForm>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    currentRoute: state.routing.location.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(withTheme()(form));
