import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import 'react-mdl/extra/material.js';

import App from './components/app';
import TopMenu from './components/menu';
import Player from './components/player';
import PlayerList from './components/player_list';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(
  reduxThunk
),typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <TopMenu />
        <Switch>
          <Route path="/players/:id" component={Player}></Route>
          <Route exact path="/players" component={PlayerList}></Route>
          <Route exact path="/" component={App}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#react-root'));
