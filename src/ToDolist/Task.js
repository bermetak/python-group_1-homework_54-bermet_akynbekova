import React, {Component} from 'react';


class Task extends Component {
    render() {
        return (
            <div className={"task"}>
                <div className={'d-inline'}>
                    <p>
                        {this.props.task}
                    </p>
                </div>
                <div className={'d-inline'}>
                    <button onClick={this.props.onRemoveTask}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        )
    }
}


export default Task