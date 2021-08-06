import React, {createContext, useState, useEffect} from 'react'
export const TaskListContext = createContext()


const TaskListContextProvider = props => {
    const initialState = JSON.parse
    (localStorage.getItem('Tasks Collection')) || [];

    const [tasks, setTasks] = useState(initialState);
    useEffect(() => {
        localStorage.setItem('Tasks Collection', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(title) {
        setTasks([...tasks, {title, id: Date.now()} ]);
        // setTasks([...tasks, {title, id: uuid()} ]);
    };
    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    };
    function clearList() { setTasks([/* empty array  */]) };
    return (
        <TaskListContext.Provider value = {{tasks, addTask, removeTask, clearList}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
