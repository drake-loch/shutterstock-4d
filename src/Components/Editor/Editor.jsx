import React, { Component } from 'react'
import './Editor.scss'
import notif from '../../assets/notif.svg'
require('dotenv').config()
const sstk = require('shutterstock-api');
sstk.setAccessToken('v2/cjZDeHo4VlliR05WTlIzb2U3MWh1UUd3S01rZVlTUW8vMjkyMTk1OTk5L2N1c3RvbWVyLzMvUVRQdmVUclpFN3ZnTnNxY2JLSVFBM2M2VGh2Ym8yN3E4VlBsZ0FLZzVxZmJqOWhfNGF3NUUyNUhXdUdSa1lWS0ZOSGQxVWFOU1NicWpPLTlkd0V0dGhEVjJZSkFMMWxvcThnLUdTdU83eXhpY2FmMFRWVTN4d2JRLWwzbWMtNGM4MkNYbmZvdFctSVM5MGlzOU56VFJQY0JyVjEzeklBN0g5MGV4WEZQZHBmYzZtSHRud2E0R0VDSjYtcndwOWVpWVVBckJqZnZtT1hOb0M4UlhMcXZPZw');
const api = new sstk.ImagesApi();


export class Editor extends Component {
    state = {
        open: false,
        recs: []
    }

    openMenu = () =>{
        this.setState({
            ...this.state,
            open: !this.state.open
        })

        console.log(`Menu is ${this.state.open ? 'open' : 'closed'}`);

        window.Editor({
            apiKey: "XDj5YViial3ibnnevAfmGi14",
            container: document.querySelector('#editor'),
          }).launch()

          const queryParams = {
            "query": "hiking",
            "image_type": "photo",
            "orientation": "vertical",
            "people_number": 3
          };
          
          api.searchImages(queryParams)
            .then(({ data }) => {
              this.setState({
                  ...this.state,
                  recs: data.map(d => d.assets.preview.url)
              })
            })
            .catch((error) => {
              console.error(error);
            });
    }

    getRecs = () => {
        
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
                    {this.state.open && <div className="menu">
                        {this.state.recs.map(i => <img className='rec' src={i}/>)}    
                    </div>}
                    <div className="faker"></div>
                </div>
            </div>
        )
    }
}

export default Editor