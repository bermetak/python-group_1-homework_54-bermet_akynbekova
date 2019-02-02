import React from 'react';

function AddTaskForm(props) {

    return (
        <div className={"addtaskform"}>
            <form className={'d-inline'}>
                <input
                    type="text"
                    value={props.task.name}
                    onChange={props.onChangeInput}
                />
            </form>
            <div className={'d-inline'}>
                <button onClick={props.onAddTask}>
                    Add
                </button>
            </div>
        </div>
    )
}


export default AddTaskForm