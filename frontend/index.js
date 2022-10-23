var React = require('react');
var ReactDOM = require('react-dom');
import { AppComponent } from './components/app';
import $ from 'jquery';
import '../frontend/assets/scss/main.scss';
window.jQuery = $;
window.$ = $;
require('jquery')

ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
);