import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

import muiThemeable from 'material-ui/styles/muiThemeable';

class form extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      formData: {
        name: '',
        email: '',
      },
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.renderPrevButton = this.renderPrevButton.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleBlur(event) {
    this.refs[event.target.name].validate(event.target.value);
  }

  nextStep() {
    if (this.refs.form.walk(this.refs.form.childs)) {
      let step = this.state.step;
      if (step < 3) {
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
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
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
    if (step > 0 && step < 3) {
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
            (step < 3 ? 'Next' : 'Submit')
          }
          onClick={step < 3 ? this.nextStep : this.submit}
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
