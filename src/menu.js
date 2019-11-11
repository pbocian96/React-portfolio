import React from 'react';
import './menu.css';
import posed from 'react-pose';


const MyButton = posed.div ({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.9, 
        transition: { duration:1 } 
        },
    hoverable: true,
    hover: {
    scale: 1.05,
    }
})

class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            first: 'Projects',
            second: 'About Me',
            third: 'Contact'
        }
    }
  
   
    render() {
        return(
            <div className="menu">
            <MyButton className="MyButton">Projects</MyButton>
            <MyButton className="MyButton">About Me</MyButton>
            <MyButton className="MyButton">Contact</MyButton>
            </div>
        )
  }
}

export default Menu;