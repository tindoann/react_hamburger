import React, { Component } from 'react'
import './menuContent.css'
import { createECDH } from 'crypto';

class MenuContent extends Component {
  contructor(props) {
    super(props)

    this.items = []
    for (let i=1; i<=5; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => <div className="menu-item" key={i}>
          <a href="https://github.com/Middlerun/cheeseburger-menu"
          onClick={this.props.closeCallback}
          target="_blank">
          Menu item {i}
         </a>
      </div>)}

      <p className="hint">Click outside the menu to close it, or swipe </p>
    </div>
    )
  }
}

MenuContent.PropTypes = {
  closeCallback: React.ProTypes.func.isRequired
}

export default MenuContent; 

