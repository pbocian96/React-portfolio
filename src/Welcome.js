import React from 'react';

import './index.css';

class Welcome extends React.Component {
    constructor(){
        super();
        this.state= {
            title: "Piotr Bocian",
            text: "Behold the mighty jaszczur"
        }
    }

    render(){
        return(
            <div className="welcome">
                <h1>{this.state.title}</h1>
                <h2>{this.state.text}</h2>
            </div>
        )
    }
}

export default Welcome