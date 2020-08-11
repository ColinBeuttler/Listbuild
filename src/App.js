import logo from './logo.svg';
import './App.css';
import Input from './UserInput'
import Output from './UserOuput' 
import React, { Component } from 'react';

class App extends Component {

  state = {
    username: 'Colin'
  }; 

  
  
    handleupdate = (event) => {
        this.setState({
            username: event.target.value })

    }

  render() {

    const style ={
      background: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    };

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
          <Input changed={this.handleupdate} currentuser={this.state} />
          <Output username={this.state.username} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </header>
      </div>
    );
  }

}

export default App;
