import React from 'react';
import './Toggle.scss';
function Toggle() {
    return (
        <div className="toggle">
            <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle
