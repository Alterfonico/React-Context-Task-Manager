import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';

//function addClassName(className) { task.addClass('complete') };
function Task({task}) {
    const {removeTask} = useContext(TaskListContext);
   
    return (  
        <>
            <li className='list-item'>
                <label>
                    <div className="chulo-custom"></div>
                    <input type="checkbox" value="completed" className="checker" />
                    <span>{task.title}</span>
                </label>
                <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </li>
        </>
    )
}

export default Task;
