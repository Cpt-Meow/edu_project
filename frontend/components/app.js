import React, { Component } from 'react';
import Header from './header/header';
import Logo from './logo/logo';


export class AppComponent extends Component {


    constructor(args) {
        super(args);
    }

    render() {
        return (
            <Logo/>
            // <div>
            //     hello react
            // </div>
        )
    }
}