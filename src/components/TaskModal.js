import React, { useState, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";

function TaskModal(props) {
   
    return (
    
        <Modal.Dialog show={props.isHidden} onHide={props.onClose}
        parentselector={() => document.querySelector('#root')}>
            <Modal.Header closeButton>
                <Modal.Title>Translations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Filter:</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <hr />
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onClose}>Save</Button>
                <Button onClick={props.onClose}>Close</Button>
            </Modal.Footer>
            </Modal.Dialog>
      
    )
}

export default TaskModal;