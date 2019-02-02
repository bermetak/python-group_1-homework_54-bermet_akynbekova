import React, {Component} from 'react';


class Task extends Component {
    render() {
        return (
            <div className={"task"}>
                <div className={''}>

                        {this.props.name}

                </div>
                <div className={''}>
                    <button onClick={this.props.onRemoveTask}>
                        Удалить
                        {/*<i className="far fa-trash-alt"></i>*/}
                    </button>
                </div>
            </div>
        )
    }
}


export default Task