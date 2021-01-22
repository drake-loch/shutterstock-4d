import React, { Component } from 'react'
import './Overlay.scss';

export class Overlay extends Component {
    constructor(){
        super();

    }


    openMenu = () =>{
        console.log("Menu has opened");
    }
    render() {
        return (
            <div className="overlay">
                <div onClick={this.openMenu} className="overlay-bttn"></div>
            </div>
        )
    }
}

export default Overlay
