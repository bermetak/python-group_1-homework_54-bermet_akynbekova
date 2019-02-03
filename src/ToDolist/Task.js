import React from 'react';


function Task(props) {
    return (
        <div className={"task row mt-3 border border-primary rounded w-50 ml-auto mr-auto p-2"}>
            <div className={'col'}>
                <label htmlFor="check" className={'mr-2'}>Готово</label>
                <input
                    type="checkbox"
                    checked={props.done}
                    onChange={props.onChangeTask}
                    id='check'
                />
            </div>
            <div className={'col'}>
                {props.name}
            </div>
            <div className={'row col'}>

                <div className={'col'}>
                    <button onClick={props.onDeleteTask}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Task