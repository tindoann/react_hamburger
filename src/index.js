import React, { Component } from 'react'
import { render } from 'react-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent'

const contentStyles = {
  fontFamily: 'sans-serif', 
  textAlign: 'center'
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false, 
    }
  }

openMenu() {
  this.setState({ menuOpen: true })
}

closeMenu() {
  this.setState({ menuOpen: true })
}

render() {
  return <div>
    <CheeseburgerMenu
      isOpen={this.state.menuOpen}
      closeCallback={this.closeMenu.bind(this)}>
      <MenuContent closeCallback={this.closeMenu.bind(this)}/>
    </CheeseburgerMenu>

    <HamburgerMenu
      isOpen={this.state.menuOpen}
      menuClicked={this.openMenu.bind(this)}
      width={32}
      height={24}
      strokeWidth={3}
      rotate={0}
      color='black'
      borderRadius={0}
      animationDuration={0.5}
      />

    <div style={contentStyles}>
       <h1>Cheeseburger Menu demo</h1>
       <p>Click the hamburger icon to open menu</p>
      </div>
    </div> 
  }
}

render(<App />, document.getElementById('root'))
