import React from 'react';
import './MiniMenu.css';
import menu from "./menu.png";

class MiniMenu extends React.Component {
    state = {
        on: false
    }


toggle = () => {
    this.setState({
        on: !this.state.on
    })
}

render() {
    return (
        <div>
            {this.state.on && (
                <div>
               <h1> Adjust Sensitivity Here </h1>,
               <h1> Adjust Animal Interval Here </h1>
               </div>
            )}
            <button onClick={this.toggle}> <img class="menu-button" src={menu} /></button>
        </div>
    )
}

}

export default MiniMenu;