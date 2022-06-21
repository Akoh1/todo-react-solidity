import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    return (
        <div className="d-flex flex-column task-list">
            <TaskItem/>
        </div>
    )
}

export default TaskList;