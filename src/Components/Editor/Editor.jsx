import React, { Component } from 'react'
import './Editor.scss'
import notif from '../../assets/notif.svg'

import SearchBar from '../SearchBar/SearchBar';
import Toggle from '../Toggle/Toggle';

export class Editor extends Component {
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

    componentDidMount(){
        window.Editor({
            apiKey: "XDj5YViial3ibnnevAfmGi14",
            container: document.querySelector('#editor'),
          }).launch()
    }

    render() {
        return (
            <div id="editor">
                <div className="overlay">
                    <div onClick={this.openMenu} className="overlay-bttn">
                        <img src={notif} alt="" className="notif-icon"/>
                    </div>
                    {this.state.open && <div className="menu"><SearchBar /><Toggle /></div>}
                </div>
            </div>
        )
    }
}

export default Editor