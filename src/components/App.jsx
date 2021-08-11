import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskListContextProvider from '../context/TaskListContext';
import '../App.css';

function App() {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <h1 className="header">Task Manager</h1>
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
};

export default App;

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