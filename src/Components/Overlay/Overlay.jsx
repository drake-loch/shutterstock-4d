import React, { Component } from 'react'
import './Overlay.scss';

export class Overlay extends Component {
    state = {
        open: false
    }


    openMenu = () =>{
        this.setState({
            ...this.state,
            open: !this.state.open
        })

        console.log(`Menu is ${this.state.open ? 'open' : 'closed'}`);
    }

    render() {
        return (
            <div className="overlay">
                <div onClick={this.openMenu} className="overlay-bttn"></div>
                {this.state.open && <div className="menu"></div>}
            </div>
        )
    }
}

export default Overlay
