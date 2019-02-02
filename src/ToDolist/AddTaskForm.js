import React, {Component} from 'react';


class AddTaskForm extends Component {
    render() {
        return (
            <div className={"addtaskform"}>
                <div className={'d-inline'}>
                    <input
                        type="text"
                        value={this.props.task}
                        onChange={this.props.onChangeTask}
                    />
                </div>
                <div className={'d-inline'}>
                    <button onClick={this.props.onAddTask}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}


export default AddTaskForm