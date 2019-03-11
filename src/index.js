import React from 'react';
import ReactDOM from 'react-dom';
import { BurgerMenu } from './BurgerMenu'; 
import BurgerNew from './BurgerNew'; 

const styles = {
  fontFamily: 'sans-serif', 
  textAlign: 'center'
}; 

const App = () => (
  <div style={styles}>
    <BrugerMenu />
    <BurgerWrap />
  </div>
); 

class BurgerWrap extends React.Component {
  state = {
    b: true
  }
  constructor() {
    super(); 
  window.setInterval(() => {
    this.setState({b: !this.state.b})}, 1500); 
  }
  render() { return <BurgerNew b={this.state.b} />}
  }
  
  render(<App />, document.getElementById('root')); 

  