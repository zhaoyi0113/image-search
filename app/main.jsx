import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import '@blueprintjs/core/dist/blueprint.css';

import reducers from './reducers';
import Root from './config/Root.jsx';

const middlewares = [];
middlewares.push(thunk);
middlewares.push(createLogger);
const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root.jsx', () => {
    const newApp = require('./config/Root.jsx').default;
    render(newApp);
  });
}
