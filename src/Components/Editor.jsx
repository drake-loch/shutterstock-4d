import React, { Component } from 'react'
const sstk = require('shutterstock-api');

export default class Editor extends Component {
    componentDidMount(){
        window.Editor({
            apiKey: "XDj5YViial3ibnnevAfmGi14",
            container: document.querySelector('#editor'),
        }).launch();
    }

    render() {
        return (
            <div id = 'ed'>
                
            </div>
        )
    }
}
