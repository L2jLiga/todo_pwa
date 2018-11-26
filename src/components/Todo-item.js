import React, { Component } from 'react';
import './Todo-item.css';

export class TodoItem extends Component {
    render() {
        return (
            <div className="todo">
                <input className="todoCheck"
                       type="checkbox"
                       checked={this.props.todo.completed}
                       onChange={() => this.props.toggle(this.props.todo.id)}/>
                <span className={['todoText', this.props.todo.completed ? 'todoChecked' : ''].join(' ')}>
					{this.props.todo.title}
				</span>
                <span className="todoDelete" onClick={() => this.props.remove(this.props.todo.id)}>
                    Delete
                </span>
            </div>
        );
    }
}
