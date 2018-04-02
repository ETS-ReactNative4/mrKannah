import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import createRavenMiddleware from "raven-for-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './pages/index';
import reducers from './reducers';
import './index.css';

injectTapEventPlugin();

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware),
  applyMiddleware(
    createRavenMiddleware(window.Raven, {
      breadcrumbDataFromAction: action => {
        return { STRING: action.str };
      }
    })
  )
);

history.listen(function (location) {
  window.ga('send', 'pageview', location.pathname);
});

const MUI = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='*' component={App}/>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<MUI />, document.getElementById('root'));
