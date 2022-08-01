import { Modal, Form, Button } from 'react-bootstrap'
import React, { useState, useRef, useEffect } from 'react'
import { postGroupChat, storage } from "../../services/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"

function AddGroupChat() {

  const [showModal, setShowModal] = useState(false);
  const [impageUpload, setImageUpload] = useState(null)

  const chatNameRef = useRef();
  const FileNameRef = useRef();

  const uploadImage = (event) => {
    event.preventDefault();
    if (impageUpload == null) return;

    const imageRef = ref(storage, `images/${impageUpload.name + v4()}`)
    uploadBytes(imageRef, impageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        postGroupChat(chatNameRef.current.value, url)
        setShowModal(false)
      })
    }).catch(error => console.log(error))
  }

  return (
    <div>
      <span onClick={() => { setShowModal(true)}} className="material-icons newMessageButton">group_add</span>
      <Modal className='dark' show={showModal} onHide={() => { setShowModal(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Group Chat</Modal.Title>
        </Modal.Header>
        <Form 
        className='flex-container' 
        style={{ flexDirection: "column" }}
          onSubmit={uploadImage}
        >
          <Modal.Body>
            <div className="form">
              <div className="input-container">
                <Form.Control ref={chatNameRef} type="text"  placeholder='Chat Name' required />
              </div>
              <br />
              <div className="input-container">
                <Form.Control
                  ref={FileNameRef}
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0])
                  }}
                  accept="image/*" required />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
              <Button type="submit" onClick={uploadImage} className="btn btn-success LoginButton">Create</Button>
            </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default AddGroupChat