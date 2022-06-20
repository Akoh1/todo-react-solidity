import React, { useState, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";

function TaskModal(props) {
   
    return (
      
        // <div className={showHideClassName} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div className="modal-dialog" role="document">
        //     <div className="modal-content">
        //         <div className="modal-header">
        //         <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        //         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //         </button>
        //         </div>
        //         <div className="modal-body">
        //         ...
        //         </div>
        //         <div className="modal-footer">
        //         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //         <button type="button" className="btn btn-primary">Save changes</button>
        //         </div>
        //     </div>
        //     </div>
        // </div>
        <Modal show={props.isHidden} onHide={props.onClose}
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
            </Modal>
      
    )
}

export default TaskModal;