import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content} from './components';
import './components/styles.css'


const about = "Hello my name is Hannah, and I hate Bananas."

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <NavBar />
        <Header title={"Hello!"} headerMsg={"Welcome to my about me page"} className="header"/>
        <Content about={about}/>
      </div>
    );
  }
}

export default App;
