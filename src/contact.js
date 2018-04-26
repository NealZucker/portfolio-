import React, { Component } from "react";
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact">
          <div className="contactText">
            <div className="contactHeader"> Let's Build Something Together </div>
            <form action="https://formspree.io/nealzucker@gmail.com"method="POST">         
              <div className="senderInfo">
                <input className="input2" type="text" name="name" placeholder="Your Name"></input>
                <input className="input2" type="text" name="phone number" placeholder=" Your Phone Number"></input>
                <input className="input2" type="email" name="_replyto" placeholder="Your Email"></input>
                <textarea  className="input3" name="message" placeholder="Enter a brief message with you inquiry, and I will get back to you shortly!"></textarea>
                <input className="button" type="submit" value="Send"></input>
              </div>
            </form>
          </div>
        </div> 
      </div>
    );
  }
}

export default Contact;