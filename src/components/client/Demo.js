import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

export default class Demo extends React.Component {
  state = {
    open: false,
  };

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
          <h2>
            {this.props.id}
            <form action="/action_page.php">
              <div class="form-group">
                <label for="Task title">Email address:</label>
                <input type="text" class="form-control" id="email"/>
              </div>
              <div class="form-group">
                <label for="pwd">Content:</label>
                <input type="textarea" class="form-control" id="pwd"/>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </h2>
        </Modal>
      </div>
    );
  }
}
