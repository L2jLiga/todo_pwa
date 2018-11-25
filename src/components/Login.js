import React, { Component } from 'react';

export class Login extends Component {
    render() {
        return (
            <div className="loginScreen">
                <h2 className="loginLabel">Enter user name</h2>
                <div className="loginControls">
                    <input type="text"
                           id="username"
                           placeholder="Avi"/>
                    <svg className="feather right-arrow login-button"
                         aria-label="Login"
                         role="button"
                         onClick={() => this.props.login(document.getElementById('username').value)}>
                        <use xlinkHref="/todo_pwa/img/feather-sprite.svg#arrow-right-circle"/>
                    </svg>
                </div>
            </div>
        );
    }
}
