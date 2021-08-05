import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task'

function TaskList() {
    const {tasks}= useContext(TaskListContext);
    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map((task) => {
                        return <Task task={task} key={task.id}/>;
                    })}
                </ul>
            ) : (<div className="no-tasks">Zero Tasks</div>)}
        </div>
    );
};

export default TaskList;


//Original Instructions:
/*
import React from 'react'

const App = () => {
    return (
        <div>
            
        </div>
    )
};

export default App;
*/