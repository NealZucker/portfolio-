import React, { Component } from "react";
import "./index.css";

class Example extends Component {
  render() {
    return (
      <div>
        <div className="exampleLink">
          <div className="left"><a className="left2" href="https://honeyhole.herokuapp.com/"><div className="left3">Honey Hole</div></a>
          </div>
          <div className="right">My Work<a className="right2" href="https://nealzucker.github.io/AndyPhoto/#/"><div className="right3">Andy Hodapp Photography</div></a>
          </div>
        </div>
        <div className="buffer"> </div>
      </div>
    );
  }
}

export default Example;