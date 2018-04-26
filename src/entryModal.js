import React from 'react';
import "./index.css";

class EntryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: "open" };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();  
    this.setState({isModalOpen: "closed"});
  }

  render() {
    
    if(this.state.isModalOpen === "open" ){
      return (
        <div className="modalBackground">  
          <div className="entryModal">      
        Hi! I'm Neal, A Web developer from Bozeman Mt.
            <button className="button2" onClick={this.closeModal}>
                enter
            </button>
          </div>
        </div>
      );} else if(this.state.isModalOpen === "closed"){
      return(
        null
      );
    }
  }

}

export default EntryModal;
