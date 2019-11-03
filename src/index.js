import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome.js';
import Menu from './menu.js'
import './index.css';

const App = () => {
    return(
    <div className="container">
    <Menu/>
    <Welcome/>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
    );