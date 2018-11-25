import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="title">TODO</h1>
                {this.props.login &&
                <div className="icons">
                    <svg className="feather">
                        <use xlinkHref="/todo_pwa/img/feather-sprite.svg#bell-off"/>
                    </svg>
                    <svg className="feather log-out"
                         aria-label="Logout"
                         role="button"
                         onClick={this.props.logOut}>
                        <use xlinkHref="/todo_pwa/img/feather-sprite.svg#log-out"/>
                    </svg>
                </div>}
            </header>
        );
    }
}
