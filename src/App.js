import React, {Component} from 'react';
import './App.css';
import AddTaskForm from './ToDolist/AddTaskForm';
import Task from './ToDolist/Task';

class App extends Component {
    state = {
        tasks: [
            {id: 1, name: 'Сделать домашку', done: true},
            {id: 2, name: 'Прибраться дома', done: false},
            {id: 3, name: 'Полить цветы', done: true},
        ],
        currentTask: {name: '', done: false}
    };


    deleteTask = (id, event) => {
        event.preventDefault();
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    };


    getTasks = () => {
        return <div>
            {this.state.tasks.map((task) => {
                return <div key={task.id}>
                    <Task
                        name={task.name}
                        done={task.done}
                        onChangeTask={(event) => this.doneTask(task.id, event)}
                        onDeleteTask={(event) => this.deleteTask(task.id, event)}>
                    </Task>
                </div>
            })}
        </div>
    };


    doneTask = (id, event) => {
        event.preventDefault();
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });
        let name = this.state.tasks[taskId].name;
        let done = this.state.tasks[taskId].done;
        let newTask = {
            id: taskId,
            name: name,
            done: !done
        };

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1, newTask);

        this.setState({
            ...this.state,
            tasks
        });
    };

    addTaskForm = (event) => {
        event.preventDefault();
        let task = event.target.value;
        let currentTask = {
            ...this.state.currentTask,
            name: task
        };
        this.setState({
            ...this.state,
            currentTask
        });
    };

    addTask = (event) => {
        event.preventDefault();
        let task = {...this.state.currentTask};
        const now = new Date();
        task.id = now.getTime();
        let tasks = [...this.state.tasks, task];
        this.setState({
            ...this.state,
            tasks,
            currentTask: {name: '', done: false}
        });
    };

    render() {
        return (
            <div className="App container mt-5">
                <h1>To Do list</h1>
                <div>
                    <AddTaskForm
                        task={this.state.currentTask}
                        onChangeInput={(event) => this.addTaskForm(event)}
                        onAddTask={(event) => this.addTask(event)}>
                    </AddTaskForm>
                </div>
                <div>
                    {this.getTasks()}
                </div>
            </div>
        );
    }
}

export default App;
