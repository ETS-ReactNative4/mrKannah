import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';

import muiThemeable from 'material-ui/styles/muiThemeable';

const topics = [
  'I\'d like to work with you',
  'I have some feedback',
  'I\'m looking for some advice',
  'I\'d just like to chat',
  'Other',
];

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
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      if (step < 4) {
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
    if (this.state.step < 4) {
      this.nextStep();
    } else {
      this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
      });
    }
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
    const { step, formData, submitted, disabled } = this.state;
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
              style={{textAlign: 'left'}}
              multiLine={true}
              rows={2}
              ref="message"
              floatingLabelText="Your Message"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              name="message"
              value={formData.message}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Card>
        );
        break;
      default:
        content = (
          <Card>
            <CardText>
              I think you'll agree, there's nothing better than a message from a complete stranger. It's an opportunity to get to know someone and make a new friend.<br />
              If you're interested in me and what I do, get in touch.
            </CardText>
          </Card>
        );
        break;
    }
    if (step > 0 && step < 4) {
      content = (
        <div id={`step${step}`}>
          {content}
          <Stepper activeStep={step}>
            <Step>
              <StepLabel>Introduce yourself</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad group</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad</StepLabel>
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
      return (<RaisedButton
        label="previous"
        onClick={this.prevStep}
        style={{ marginRight: '16px' }}
        primary
        disabled={step === 1}
      />)
    }
  }
  
  render() {
    const {step, disabled, submitted} = this.state;
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        instantValidate={false}
      >
        {this.renderStep()}
        {this.renderPrevButton()}
        <RaisedButton
          label={
            (submitted && 'Your form is submitted!') ||
            (step === 0 && 'Shoot me a message') ||
            (step < 4 ? 'Next' : 'Submit')
          }
          onClick={step < 4 ? this.nextStep : this.submit}
          secondary
          disabled={disabled || submitted}
        />
      </ValidatorForm>
    );
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
    currentRoute: state.routing.locationBeforeTransitions.pathname.toLowerCase(),
  }
}

export default connect(mapStateToProps)(muiThemeable()(form));
