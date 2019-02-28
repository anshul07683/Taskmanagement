import React from 'react';

import Modal from 'react-responsive-modal';

import Demo from './Demo.js';



class Taskpopup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>ADD TASK</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Demo/>
        </Modal>
      </div>
    );
  }
}

export default Taskpopup;