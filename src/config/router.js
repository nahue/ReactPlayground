/*global require*/

import React from 'react'; // eslint-disable-line no-unused-vars
import Router from 'react-router';
import Main from '../components/Main/main';
import Home from '../components/Home/home';
import Login from '../components/Login/Login';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="home" path="/" handler={Home}/>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="images" path="/images" handler={require('react-router-proxy?name=ImageGrid!../components/ImageGrid/ImageGrid.js')}/>

    <DefaultRoute handler={Home} />
  </Route>
);
