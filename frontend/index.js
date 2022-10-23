var React = require('react');
var ReactDOM = require('react-dom');
import { AppComponent } from './components/app';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require('jquery')
require('./assets/scss/main.scss')

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
);