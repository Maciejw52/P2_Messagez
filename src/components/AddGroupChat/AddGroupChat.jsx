import { Modal, Form } from 'react-bootstrap'
import React, { useState, useRef } from 'react'

function AddGroupChat() {

  const [showModal, setShowModal] = useState(false);
  
  const chatNameRef = useRef();
  const FileNameRef = useRef();

  return (
    <div>
      <span onClick={() => { setShowModal(true)}} className="material-icons newMessageButton">group_add</span>
      <Modal className='dark' show={showModal} onHide={() => { setShowModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Group Chat</Modal.Title>
        </Modal.Header>
        <Form className='flex-container' style={{ flexDirection: "column" }}>
          <Modal.Body>
            <div className="form">
              <div className="input-container">
                <Form.Control ref={chatNameRef} type="text"  placeholder='Chat Name' required />
              </div>
              <br />
              <div className="input-container">
                <Form.Control ref={FileNameRef} type="file" accept="image/*" required />
              </div>
            </div>
          </Modal.Body>

        </Form>

      </Modal>
    </div>
  )
}

export default AddGroupChat