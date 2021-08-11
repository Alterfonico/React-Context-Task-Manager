import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';

//function addClassName(className) { task.addClass('complete') };
function Task({task}) {
    const {removeTask} = useContext(TaskListContext);
   
    return (  
        <div>
            <li className='list-item'>
                <div>
                    <input type="checkbox" className="checker"/>
                    <label>{task.title}</label>
                </div>
                <div>
                    <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Task;
