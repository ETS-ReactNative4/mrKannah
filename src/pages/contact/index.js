import React from 'react';
import Social from './social';

import muiThemeable from 'material-ui/styles/muiThemeable';

const Contact = () => (
  <div className="App">
    <Social/>
  </div>
);

export default muiThemeable()(Contact);
