import React, {useContext, useState} from 'react';
import {TaskListContext} from '../context/TaskListContext';

function TaskForm() {
    const {addTask, clearList} = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    function handleChange(evento) {
        setTitle(evento.target.value);
        // Testing the input with: console.log(title);
    };
    function handleSubmit(evento) {
        evento.preventDefault();
        addTask(title);
        setTitle('');
    };
    // Original Instructions:
    // const handleSubmit = evento => {};
    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                onChange={handleChange}
                value={title}
                type="text" 
                className="task-input" 
                placeholder="Add your task here"
                required
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button onClick={clearList} className="btn clear-btn">Clear</button>
            </div>
        </form>
    );
};

export default TaskForm


//Original Instructions:
/*
import React from 'react'

const App = () => {
    return (
        <form action="" className="form">
            <input/>
        </form>
    )
};

export default App;
*/