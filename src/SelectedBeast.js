import React from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.onHide}>
          <Modal.Header closeButton>
            {this.props.selectedBeast.title}
          </Modal.Header>
          <Image src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} />
          <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
        </Modal>
      </>
    );
  }
}

// <Modal.Header closeButton>
//   <Modal.Title>{this.state.selectedPerson}</Modal.Title>
// </Modal.Header>
export default SelectedBeast;