import React, { Component } from 'react'
import './Overlay.scss';
import SearchBar from '../SearchBar/SearchBar';

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

    renderSugWindow = () =>{
        return(
            <SearchBar />
        );
    }

    render() {
        return (
            <div className="overlay">
                <div onClick={this.openMenu} className="overlay-bttn"></div>
                {this.state.open && this.renderSugWindow}
            </div>
        )
    }
}

export default Overlay
