import React, { Component } from 'react'

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
