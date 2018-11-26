import localforage from 'localforage';
import React, { Component } from 'react';
import { SERVER_URL } from '../registry';
import './Content.css';
import { TodoItem } from './Todo-item';

export class Content extends Component {
    state = {todos: []};

    componentDidMount() {
        this.fetchTodos();
    }

    componentWillUnmount() {

    }

    fetchTodos() {
        fetch(SERVER_URL + '/todos/' + this.props.login)
            .then(response => response.json())
            .then(body => body.result || [])
            .then((todos) => this.setState({todos}));
    }

    getLatestTodos() {
        return localforage.getItem('todos').then(val => {
            return val || this.state.todos;
        });
    }

    async addTodo(text) {
        const todos = await this.getLatestTodos();

        await this.postTodos([...todos, {title: text, completed: false, id: todos.length + 1}]);

        document.getElementById('todoText').value = '';
    }

    async removeTodo(todoId) {
        const todos = await this.getLatestTodos();

        await this.postTodos(todos.filter(({id}) => id !== todoId));
    }

    async postTodos(todos) {
        await localforage.setItem('todos', todos);

        const swRegistration = await navigator.serviceWorker.ready;

        await swRegistration.sync.register('sync');

        // allow UI change
        // better way use messages http://craig-russell.co.uk/2016/01/29/service-worker-messaging.html
        this.setState({todos});
    }

    async toggleTodo(todoID) {
        const todos = await this.getLatestTodos();

        const newTodos = todos.map(todo => {
            if (todo.id === todoID) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.postTodos(newTodos);
    }

    render() {
        return (
            <div className='content-wrapper'>
                <div className="content">
                    <div className="todoItems">
                        {this.state.todos.filter(t => !t.completed).map(todo => <TodoItem key={todo.id}
                                                                                          todo={todo}
                                                                                          toggle={this.toggleTodo.bind(this)}
                                                                                          remove={this.removeTodo.bind(this)}/>)}
                    </div>
                    <h2 className="labelFinished">Finished</h2>
                    <div className="todoItems">
                        {this.state.todos.filter(t => t.completed).map(todo => <TodoItem key={todo.id}
                                                                                         todo={todo}
                                                                                         toggle={this.toggleTodo.bind(this)}
                                                                                         remove={this.removeTodo.bind(this)}/>)}
                    </div>
                    <div className="newTodo">
                        <input type="text"
                               id="todoText"
                               placeholder="Enter todo..."/>
                        <svg className="feather right-arrow"
                             aria-label="Add new todo"
                             role="button"
                             onClick={() => this.addTodo(document.getElementById('todoText').value)}>
                            <use xlinkHref="/todo_pwa/img/feather-sprite.svg#arrow-right-circle"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}
