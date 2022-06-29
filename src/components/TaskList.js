import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
// import web3 from "../web3"
// import todo from '../todo';

function TaskList(props) {
    const [tasks, setTasks] = useState([]);
    const [draggedTask, setDraggedTask] = useState();
    const [status_id, setStatusID] = useState(props.status_id)
    
    useEffect(() => {
        // Update the document title using the browser API 
        props.setDraggedTask(draggedTask);
        async function fetchData(){
       
            await props.tasks.map((elem) => {
                if (parseInt(elem.status) === status_id) {
                    // console.log("Status is here");
                    if (tasks.includes(elem) === false) {
                        setTasks(arr => [...arr, elem]); 
                    }
                }
            });
        }
        fetchData();

        // return () => {
        //     // this now gets called when the component unmounts
        //     ignore = true; 
        //   };
    }, [props.tasks, draggedTask]);

    return (
        <div className="d-flex flex-column task-list">
            {
                tasks && tasks.map((item, id) => (
                    <TaskItem key={id} 
                    data={item} 
                    setDraggedTask={setDraggedTask}
                    status_id={status_id}/>
                ))
            }
        </div>
    )
}

export default TaskList;