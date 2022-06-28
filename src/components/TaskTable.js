import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import web3 from "../web3"
import todo from '../todo';
// import { Modal, Button } from "react-bootstrap";

function TaskTable() {
    const [statusText, setStatusText ]= useState('');
    // const [status, setStatus ] = useState({0: 'Draft'});
    const [status, setStatus]= useState([]);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskAuthor, setTaskAuthor] = useState('');

    const [tasks, setTasks] = useState([]);

    const [draggedTask, setDraggedTask] = useState();

    
    useEffect(() => {
        // Update the document title using the browser API
        const fetchData = async () => {
            // You can await here
            const todo_status = await todo.methods.getStatus().call();
            console.log("todo status: " + todo_status);
            setStatus([...todo_status]);
            // setStatus( arr => [...arr, val]);

            const todo_tasks = await todo.methods.getAllTasks().call();
            setTasks([...todo_tasks]); 

            // console.log("DraggedTask: " + draggedTask);
            
        }
        fetchData();
        // getStatus();
        // console.log("React table comp task push: " + task_array);
        
    },[]);

    // const getDraggedTask = (arr) => {
    //     console.log("array from drag: " + arr);
    // };


    const createStatus = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        const todo_status = await todo.methods.getStatus().call();
    
        if (todo_status.includes(statusText) === false) {
            await todo.methods.addStatus(statusText).send({
                from: accounts[0]
              });
            //   setStatus( arr => [...arr, statusText]);
            window.location.reload(true);
        }
        // window.location.reload(false);
        // let updatedValue = {};
        // updatedValue = {"item1":"juice"};
        // setShopCart(shopCart => ({
        //     ...shopCart,
        //     ...updatedValue
        //     }));
        // setStatus( arr => [...arr, statusText]);
    };

    const deleteStatus = async (event) => {
        event.preventDefault();
        let selectElem = document.querySelector('#status_selection');
        let output = parseInt(selectElem.value);
        console.log("Target delete: " + output);
        const accounts = await web3.eth.getAccounts();
        await todo.methods.removeStatus(output).send({
            from: accounts[0]
        });
        window.location.reload(true);
    };

    const createTask = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await todo.methods.createTask(taskTitle, taskAuthor).send({from: accounts[0]});
        window.location.reload(true);
    
    };

    const onDropTask = async (event, status_id) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await todo.methods.changeTaskStatus(draggedTask, parseInt(status_id)).send({
            from: accounts[0]
        });
        window.location.reload(true);
    }

    const onDropTaskOver = async (event) => {
        event.preventDefault();
       
    }
    // 
    
    return (
        <>
       
      <div className="task-table">

        <div className="modal fade" id="noStatus" tabIndex="-1" aria-labelledby="noStatusLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Please create a status to be able to create a Task</p>
                    </div>
                    
                </div>
            </div>
        </div>
       
        
      <div className="modal fade" id="statusExist" tabIndex="-1" aria-labelledby="statusExistLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="statusExistLabel">Create a Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={createTask}>
                            <div className="form-group">
                                <label htmlFor="task-title">Title</label>
                                <input type="text" 
                                    value={taskTitle}
                                    onChange={e => setTaskTitle(e.target.value)}
                                    className="form-control" 
                                    id="task-title" 
                                    placeholder="Task Title"/>

                                <label htmlFor="task-author">Author</label>
                                <input type="text" 
                                    value={taskAuthor}
                                    onChange={e => setTaskAuthor(e.target.value)}
                                    className="form-control" 
                                    id="task-author" 
                                    placeholder="Task Title"/>
                                
                            </div>
                            <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
                
            {/* <div className="modal-header">
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
            </div> */}
            </div>
        </div>
        </div>
    
        <div className="d-flex justify-content-center form-task">
            
            <div className="p-2">
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

            <div className="p-2">
                <form onSubmit={deleteStatus}>
                    <div className="form-group">
                        <label htmlFor="status_selection">Select Status</label>
                        <select className="form-control" id="status_selection">
                        {(status || []).map((item, id) => (
                            <option value={id} key={id}>{item}</option>
                            
                        ))}
                        {/* <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option> */}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Delete Status</button>
                </form>
            </div>
        </div>
     
        
        <table className="table">
           
            <thead>
                <tr>
                    <th>
                        {
                            status.length > 0 ?
                            <button className="btn" data-toggle="modal" data-target="#statusExist">
                            <i className="bi bi-plus-circle"></i></button>
                            : <button className="btn" data-toggle="modal" data-target="#noStatus">
                            <i className="bi bi-plus-circle"></i></button>
                        }
                        
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
                        <td className='loop-td' key={id} 
                        onDrop={(event) => onDropTask(event, id)} 
                        onDragOver={(event) => onDropTaskOver(event)}>
                            <TaskList 
                            key={item}
                            status_id={id} 
                            tasks={tasks}
                            setDraggedTask={setDraggedTask}
                           
                            />
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