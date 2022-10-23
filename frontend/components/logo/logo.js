import React from 'react';
import { Component } from 'react';
import Logo_img from './img/logo.png';

class Logo extends Component{
    render() {
        return (
            <div className="logo_wrap">
                <img className="logo_wrap-logo" src={Logo_img} alt="logo"/>
            </div>
    )}
}

export default Logo;