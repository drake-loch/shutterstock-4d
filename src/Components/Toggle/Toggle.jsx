import React, { Component } from 'react'
import './Toggle.scss';

export class Toggle extends Component {

    state = {
        toggle: false,
    }

    clickFunc = () =>{
        this.setState({
            toggle: !this.state.toggle,
        })
        console.log("TOGGLED: " + this.state.toggle);
    }

    setToggle(){
        if(this.state.toggle){
            return(<div className="toggle__cur" />);
        }else if(!this.state.toggle){
            return(<div className="toggle__cur right" />);
        }
    }

    render(){
        return (
            <div onClick={this.clickFunc} className="toggle">
                <div className="toggle__words">
                    <p className="toggle__words__text">Uploads</p>
                    <p className="toggle__words__text">Overall</p>
                </div>
                {this.setToggle()}
            </div>
        )
    }
}

export default Toggle



