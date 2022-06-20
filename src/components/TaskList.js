import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    return (
        <div className="d-flex justify-content-center">
            <TaskItem/>
        </div>
    )
}

export default TaskList;