import React, { useState, useEffect, useLayoutEffect } from 'react';
import TaskItem from './TaskItem';
import web3 from "../web3"
import todo from '../todo';

function TaskList(props) {
    const [tasks, setTasks] = useState(props.tasks);

    const [status_id, setStatusID] = useState(parseInt(props.status_id));

    let task_array = [];

    
    useEffect(() => {
        // Update the document title using the browser API
        // let ignore = false;
        
        async function fetchData(){
            // You can await here
            // const accounts = await web3.eth.getAccounts();
            // const todo_task = await todo.methods.getAllTasks().call();
            const todo_task = await todo.methods.getTasksAtState(status_id).call();
            console.log("Todo task in TaskList comp: " + todo_task);
            setTasks([...todo_task]);
            task_array.push(...todo_task);
            //     for (var i = 0; i <= taskLength ; i++) {
            //         const task = await todo.methods.getTask(i).call();
                
            //         console.log("Task: " + task);
            //         task_array.push(task);
            //   }
          
            // setTasks([...todo_task]);
            
            // console.log("React Task: " + tasks);
            // todo_task.forEach(elem => {
            //     // console.log("loop todo task status: " + elem.status);
            //     // console.log("Current status id: "+ status_id);
            //     task_array.push(elem);
            //     // setTasks(arr => [...arr, elem]);
            //     // setTasks([...elem]);
            //     // console.log("React Task: " + tasks);
            //     // if (elem.status === status_id) {
            //     //     console.log("loop todo task: " + elem);
            //     //     setTasks([...elem]);
            //     //     console.log("React Task: " + tasks);
            //     // }
            // });
            
            // setTasks([...todo_task]);
            // console.log("React Task: " + tasks);
            // setStatus( arr => [...arr, val]);
        }
        fetchData();
        

        console.log("React task: " + task_array);
        console.log("React set task: " + tasks);

        // return () => {
        //     // this now gets called when the component unmounts
        //     ignore = true; 
        //   };
    }, []);
    return (
        <div className="d-flex flex-column task-list">
         
            {
                (tasks || []).map((item, id) => (
                    <div className="p-2" key={id}>

                        <div className="alert alert-success task-item" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                           
                            <small>Aww yeah, you successfully read this important alert message. .</small>
                            <hr/>
                            <button className="card-link btn-sm">Card link</button>
                            
                        </div>
                    </div>
                    
                ))
            }
            
        </div>
    )
}

export default TaskList;