import React from 'react';
import web3 from "../web3"
import todo from '../todo';

function TaskItem(props) {

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     const fetchTask = async () => {
    //         // You can await here
    //         const todo_task = await todo.methods.getTask().call();
    //         console.log("todo task: " + todo_task);
    //         props.task.map(elem => {
                
    //         });
    //         // setTasks([...todo_task]);
    //         console.log("React Task: " + tasks);
    //         // setStatus( arr => [...arr, val]);
           
            
    //     }
    //     fetchTask();
    //     // getStatus();
        
    // },[props.status_id]);
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
                {/* <button type="button" onClick={() => deleteTask(props.data.id)} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> */}
                 <button type="button" onClick={() => deleteTask(props.data.id)} className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {/* <h4 className="alert-heading">Well done!</h4> */}
                <p>{props.data.title}</p> 
                <p>{props.data.author}</p>
                {/* <small>Aww yeah, you successfully read this important alert message. .</small> */}
                <hr/>
                <button className="card-link btn-sm">Card link</button>
                
            </div>
        </div>

        
      
    )
}

export default TaskItem;