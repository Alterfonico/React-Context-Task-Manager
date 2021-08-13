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
        setTasks([...tasks, {title, id: Date.now(), checked: false} ]);
        // setTasks([...tasks, {title, id: uuid()} ]);
    };
    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    };
    function clearList() { setTasks([/* empty array  */]) };

    // Function change the state from false to true
    function checkTask(id){
        let newTasks = tasks.map( task => {
            if(task.id === id){
                return {
                    ...task, 
                    checked : !task.checked 
                }
            }
            return task
        })

        setTasks(newTasks.sort( function(a) {
            /* if(a.checked ){
                return 1
            } */
            if(!a.checked){
                return -1
            } 
            // return 1;
        }    ) )
        
    };

    


    return (
        <TaskListContext.Provider value = {{tasks, addTask, removeTask, clearList, checkTask}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
