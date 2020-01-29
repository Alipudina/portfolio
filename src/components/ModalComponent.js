import React, { Component} from 'react';
import '../App.scss';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';


class MyVerticallyCenteredModal extends Component {
  render() {
    return (
      <Modal className='modal-main'
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='modal-header'>
          <Modal.Title id="contained-modal-title-vcenter">
            just for laptop screen!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <h4>NOTE:</h4>
          <p>
            The code for this project is written just for laptop screen
            and it is not responsive to other devices.
            If you want to see a responsive design please check
            the <b>NaTours</b> project in <b>Work</b> button.
            There you can find some of my projects.
            Thanks for your interesting and visiting my Projects.
          </p>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default class ModalClass extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: true };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <ButtonToolbar>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}
