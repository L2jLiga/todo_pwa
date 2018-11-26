import React, { Component } from 'react';
import './Todo-item.css';

export class TodoItem extends Component {
    openEditorWindow() {
        const text = window.prompt('Update ToDo', this.props.todo.title);

        if (typeof text !== 'string' || !text.length || text === this.props.todo.title) return;

        this.props.update(this.props.todo.id, text);
    }

    render() {
        return (
            <div className="todo">
                <input className="todoCheck"
                       type="checkbox"
                       checked={this.props.todo.completed}
                       onChange={() => this.props.toggle(this.props.todo.id)}/>
                <span className={['todoText', this.props.todo.completed ? 'todoChecked' : ''].join(' ')}
                      onClick={this.openEditorWindow.bind(this)}>
					{this.props.todo.title}
				</span>
                <span className="todoDelete"
                      onClick={() => this.props.remove(this.props.todo.id)}>
                    Delete
                </span>
            </div>
        );
    }
}
