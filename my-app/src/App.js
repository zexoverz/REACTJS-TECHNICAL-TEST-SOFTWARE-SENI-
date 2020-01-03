import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from "react-redux";
import store from "./store/index";

import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router >
      <Route exact path="/" component={Home}></Route>
    </Router>
    </Provider>
  );
}

export default App;
