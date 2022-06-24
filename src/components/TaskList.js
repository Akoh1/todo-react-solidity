import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import web3 from "../web3"
import todo from '../todo';

function TaskList(props) {
    const [tasks, setTasks]= useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        const fetchTask = async () => {
            // You can await here
            const todo_task = await todo.methods.getTasksAtState(props.status_id).call();
            console.log("todo status: " + todo_task);
            setTasks([...todo_task]);
            // setStatus( arr => [...arr, val]);
           
            
        }
        fetchTask();
        // getStatus();
        
    },[props.status_id]);
    return (
        <div className="d-flex flex-column task-list">
            {
                (tasks || []).map((item, id) => {
                    <TaskItem key={id} task={item}/>
                })
            }
            
        </div>
    )
}

export default TaskList;