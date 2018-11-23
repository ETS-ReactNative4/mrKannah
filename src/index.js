import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './muiTheme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { createBrowserHistory } from 'history'
import createRavenMiddleware from "raven-for-redux";
import App from './pages/index';
import reducers from './reducers';
import './index.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory()
const store = createStore(
  reducers(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      createRavenMiddleware(window.Raven, {
        breadcrumbDataFromAction: action => {
          return { STRING: action.str };
        }
      })
    )
  )
);

history.listen(function (location) {
  window.ga('send', 'pageview', location.pathname);
});

const MUI = () => (
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path='*' component={App}/>
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<MUI />, document.getElementById('root'));
