import React, { Component } from 'react';
import Typist from 'react-typist';


class MyTypist extends Component {
  state = {typing: true};

  restartTyping = () => {
    this.setState({ typing: false }, () => {
      setTimeout(() => this.setState({ typing: true }), 0);
    });
  };

  render() {
    if (this.state.typing) {
      return(
        <Typist onTypingDone={this.restartTyping}>
          <span>software</span>
          <Typist.Backspace count={8} delay={1000}/>
          <span>systems</span>
          <Typist.Backspace count={7} delay={1000}/>
          <span>teams</span>
          <Typist.Backspace count={5} delay={1000}/>
        </Typist>
      )
    } else {
      return (<span> </span>)
    }
  }
}

export default MyTypist;
