import React, { Component } from 'react';
import "./index.css";

class Scroll extends Component {
  render() {
    return (
      <div>
        <div className="scroll">          
          <div className="scrollDown"> Scroll Down<i class="fas fa-caret-square-down"></i></div>
        </div>
        <div className="buffer"></div>
      </div>
    );
  }
}

export default Scroll;
