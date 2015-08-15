import React from 'react';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '',
            password: ''
        };
    }

    render() {
        return (
            <div>LOGIN</div>
        );
    }
}
