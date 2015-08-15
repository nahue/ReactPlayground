import Router from 'react-router';
import routes from './config/router';
import Main from './components/Main/main'; // eslint-disable-line no-unused-vars
import Menu from './components/menu/menu'; // eslint-disable-line no-unused-vars

import React from 'react';
import 'material-design-lite/material.js';

import 'material-design-lite/src/typography/_typography.scss';
import './App.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

Router.run(routes, function(Root){
    React.render(<Root />, document.getElementById('app'));
});
