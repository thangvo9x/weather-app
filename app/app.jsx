var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// Use this=> dont need to build scss again
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


// Manual css
require('style!css!sass!applicationStyles');

console.log('Ready');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute  component={Timer}>Timer</IndexRoute>
            <Route path='countdown' component={Countdown}>Countdown</Route>
        </Route>
    </Router>, document.getElementById('app')
);
