import React from 'react'
import "./SuccessPopup.style.css"
import { Modal, Button } from 'react-bootstrap';
import Animation from "./Animation.gif"


const SuccessPopup = ({show, onClose }) => {
  return (

       <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Booking Success</Modal.Title>
          </Modal.Header>
          <div className='d-flex justify-content-center'> 
          <img 
              src={Animation} style={{width: "100px"}} /></div>
          <Modal.Body className="text-center">

        <p>Thank you for your Booking!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            backgroundColor: 'rgb(18 220 132)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default SuccessPopup
