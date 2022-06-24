import React, { useState, useEffect } from 'react';

function TaskItem(props) {
    return (
        <div className="p-2">
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
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {/* <h4 className="alert-heading">Well done!</h4> */}
                <small>{props.title}</small>
                <small>{props.author}</small>
                {/* <small>Aww yeah, you successfully read this important alert message. .</small> */}
                <hr/>
                <button className="card-link btn-sm">Card link</button>
                
            </div>
        </div>

        
      
    )
}

export default TaskItem;