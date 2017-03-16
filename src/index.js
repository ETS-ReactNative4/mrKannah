import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import homepage from './homepage/index';
import './index.css';

const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(browserHistory, store);

const MUI = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={homepage}/>
        {/* 404 route */}
        {/*<Route path='*' component={homepage} />*/}
      </Router>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<MUI />, document.getElementById('root'));
