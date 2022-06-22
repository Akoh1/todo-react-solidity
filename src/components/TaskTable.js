import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import web3 from "../web3"
import todo from '../todo';
// import { Modal, Button } from "react-bootstrap";

function TaskTable() {
    const [statusText, setStatusText ]= useState('');
    // const [status, setStatus ] = useState({0: 'Draft'});
    const [status, setStatus]= useState([]);
    
    useEffect(() => {
        // Update the document title using the browser API
        // const todo_status = await todo.methods.status().call();
        // console.log("todo status: " + todo_status);
        // setStatus( arr => [...arr, todo_status]);
        async function fetchData() {
            // You can await here
            const todo_status = await todo.methods.getStatus().call();
            console.log("todo status: " + todo_status);
            setStatus( arr => [...arr, todo_status]);
        }
        fetchData();
        console.log("React status: "+ status);
    },[]);

    const createStatus = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await todo.methods.addStatus(statusText).send({
            from: accounts[0]
          });
        // let updatedValue = {};
        // updatedValue = {"item1":"juice"};
        // setShopCart(shopCart => ({
        //     ...shopCart,
        //     ...updatedValue
        //     }));
        // setStatus( arr => [...arr, statusText]);
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
        
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                ...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    
        
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
        
        <table className="table">
           
            <thead>
                <tr>
                    <th>
                        <button className="btn" data-toggle="modal" data-target="#exampleModal">
                            <i className="bi bi-plus-circle"></i></button>
                    </th>
                {
                    // Object.keys(status).map((key) => (
                    //     <th key={key}>{status[key]}</th>
                    // ))
                    (status || []).map((item, id) => (
                        <th key={id}>{item}</th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    {(status || []).map((item, id) => (
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