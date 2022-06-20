import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { Modal, Button } from "react-bootstrap";
import TaskModal from './TaskModal';

function TaskTable() {
    const [statusText, setStatusText ]= useState('');
    // const [status, setStatus ] = useState({0: 'Draft'});
    const [status, setStatus]= useState(['Draft']);
    
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // document.title = `You clicked ${count} times`;
    //     console.log(statusText);
    // });

    const createStatus = (event) => {
        event.preventDefault();

        // let updatedValue = {};
        // updatedValue = {"item1":"juice"};
        // setShopCart(shopCart => ({
        //     ...shopCart,
        //     ...updatedValue
        //     }));
        setStatus( arr => [...arr, statusText]);
    };

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        console.log("Show modal click is working");
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    
    return (
        <>
       
      <div className="task-table">
        
      <TaskModal isHidden={isOpen} onClose={hideModal}/>
    
        
        <div className="form-task">
            <form onSubmit={createStatus}>
                <div className="form-group">
                    <label htmlFor="status-input-name">New Status</label>
                    <input type="text" 
                        value={statusText}
                        onChange={e => setStatusText(e.target.value)}
                        className="form-control" 
                        id="status-input-name" 
                        placeholder="Create a New Status"/>
                    
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
        
        <table className="table task-table">
           
            <thead>
                <tr>
                    <th scope="col">
                        {/* <button className="btn" data-toggle="modal" data-target="#exampleModal">
                            <i className="bi bi-plus-circle"></i></button> */}
                        <button className="btn" onClick={showModal}>
                            <i className="bi bi-plus-circle"></i></button>
                    </th>
                {
                    // Object.keys(status).map((key) => (
                    //     <th key={key}>{status[key]}</th>
                    // ))
                    status.map((item, id) => (
                        <th key={id}>{item}</th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    {status.map((item, id) => (
                        <td className='loop-td' key={id}>
                            <TaskList/>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
      </div>
      </>
    );
  }
  
  export default TaskTable;