import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { setupWebsocket } from './actions/websocket';
import rootReducer from './reducers';
import App from './App';
import './style.css';
import { requestUsers } from './actions';
import { host, port } from '../../common/config';
import { createLogger } from 'redux-logger';

const setupStore = () => {
  const initialState = {
    messages: [],
    users: [],
    userIdsTyping: {},
    currentUser: null,
    currentUserIsTyping: false,
  };

  const middleware = [];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
  }

  return setupWebsocket({ host, port }).then(({ send, receive }) => {
    middleware.push(thunkMiddleware.withExtraArgument({ send }));

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(
      applyMiddleware(...middleware),
    ));

    receive(store.dispatch);
    requestUsers(send);
    return store;
  });
};

setupStore().then((store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body,
    );
    });
