import localforage from 'localforage';
import React, { Component } from 'react';
import { Content, Header, Login } from './components';

export class App extends Component {
    state = {login: null};

    componentDidMount() {
        localforage.getItem('login').then(login => {
            if (login) {
                this.setState({login});
            }
        });

    }

    login(login) {
        localforage.setItem('login', login);
        this.setState({login});
    }

    logOut() {
        localforage.clear();
        this.setState({login: null});
    }

    render() {
        return (
            <div className="app">
                <Header logOut={this.logOut.bind(this)}
                        login={this.state.login}/>
                {this.state.login ?
                    <Content login={this.state.login}/> :
                    <Login login={this.login.bind(this)}/>}
            </div>
        );
    }
}
