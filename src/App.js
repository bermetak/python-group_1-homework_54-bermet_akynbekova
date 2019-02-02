import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddTaskForm from './ToDolist/AddTaskForm';
import Task from './ToDolist/Task';

class App extends Component {
    state = {
        tasks: [
            {id: 1, name: 'длпыужьижкщо'},
            {id: 2, name: 'Arman'},
            {id: 3, name: 'Arman'},
        ],
    };

    addTask = (id, event) => {
        console.log(event);

        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        let task = {
            ...this.state.tasks[taskId],
            name: event.target.value
        };

        let tasks = [...this.state.tasks];
        tasks[taskId] = task;

        this.setState({
            ...this.state,
            task
        })
    };

    removeTask = (id, event) => {
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    }

    getTasks = () => {
        return <div>
            {this.state.tasks.map((task) => {
                return <div>
                    <Task>
                        key = {task.id}
                        name = {task.name}
                        onRemoveTask = {(event) => this.removeTask(task.id, event)}
                    </Task>
                </div>
            })}
        </div>
    };


    render() {
        return (
            <div className="App container mt-5">
                <h1>To Do list</h1>
                <div>
                    <AddTaskForm>
                        name = {this.state.tasks.name}
                        onAddTask={(event) => this.addTask(event)}
                    </AddTaskForm>
                </div>
                <div>
                    {/*{this.getTasks()}*/}
                                {this.state.tasks.map((task) => {
                return <div>
                    <Task>
                        {/*key = {task.id}*/}
                        name = {task.name}
                        onRemoveTask = {(event) => this.removeTask(task.id, event)}
                    </Task>
                </div>
            })}
                </div>
            </div>
        );
    }
}

export default App;
