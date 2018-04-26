import React, { Component } from 'react';
import './App.css';
import  EntryModal  from "./entryModal";
import Scroll from "./scroll";
import What from "./what";
import Contact from "./contact";
import Detail from "./detail";
import Example from "./example";

class App extends Component {
  render() {
    return (
      <div className="App">
        <EntryModal/>
        <Scroll/>
        <What/>
        <Detail/>
        <Example/>
        <Contact/>
      </div>
    );
  }
}

export default App;
