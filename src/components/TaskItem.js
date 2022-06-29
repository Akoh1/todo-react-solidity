import React, { useState, useEffect } from 'react';
import web3 from "../web3"
import todo from '../todo';

function TaskItem(props) {
    const [editTask, setEditTask] = useState(false);
    const [taskTitle, setTaskTitle] = useState(props.data.title);
    const [taskAuthor, setTaskAuthor] = useState(props.data.author);

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     // const fetchTask = async () => {
    //     //     // You can await here
    //     //     const todo_task = await todo.methods.getTask().call();
    //     //     console.log("todo task: " + todo_task);
    //     //     props.task.map(elem => {
                
    //     //     });
    //     //     // setTasks([...todo_task]);
    //     //     console.log("React Task: " + tasks);
    //     //     // setStatus( arr => [...arr, val]);
           
            
    //     // }
    //     // fetchTask();
    //     // getStatus();
        
    // },[editTask]);
    const deleteTask = async (id) => {
        let int_id = parseInt(id);
        console.log("id of task: " + typeof(int_id));
        const accounts = await web3.eth.getAccounts();
        await todo.methods.removeTask(int_id).send({
            from: accounts[0]
        })
        window.location.reload(true);
    };
    
    const onDragTask = async (event) => {
        event.preventDefault();
        props.setDraggedTask(props.data.id)
        // event.dataTransfer.setData("text/plain", props.data.title);
    }

    const editTaskValue = () => {
        if (editTask === false) {
            setEditTask(true);
        } else {
            setEditTask(false);
        }
    };

    const saveEditChanges = async () => {
        let int_id = parseInt(props.data.id);
        const accounts = await web3.eth.getAccounts();
        if (props.data.title !== taskTitle) {
            await todo.methods.changeTaskName(int_id, taskTitle).send({
                from: accounts[0]
            });
        }
        if (props.data.author !== taskAuthor) {
            await todo.methods.changeTaskAuthor(int_id, taskAuthor).send({
                from: accounts[0]
            });
        }
        window.location.reload(true);
        
    }

    return (
        <div className="p-2 task-item-cover" draggable onDrag={onDragTask}>
            {/* <div class="card" style="width: 7rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div> */}

            <div className="alert alert-success task-item" role="alert">
            
                 <button type="button" onClick={() => deleteTask(props.data.id)} className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
              {
                editTask === false ? 
                <div>
                    <p>{props.data.title}</p> 
                <p>{props.data.author}</p>
                </div> :
                <div>
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
              }
                
       
                <hr/>
               
                 {
                    editTask === false ? <button className="card-link btn-sm" onClick={editTaskValue}>Edit</button>
                    : <div>
                        <button className="card-link btn-sm" onClick={editTaskValue}>Cancel</button>
                        <button className="card-link btn-sm" onClick={saveEditChanges}>Save</button>
                    </div>
                } 
                {/* <button className="card-link btn-sm" onClick={editTaskValue}>Edit</button>
                <button className="card-link btn-sm" onClick={editTaskValue}>Close</button> */}
            </div>
        </div>

        
      
    )
}

export default TaskItem;