import React, { Component } from 'react'

class AuthSignup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(`Submit`)
    }

    render() {
        const { name, email, password } = this.state
        // console.log(this.state)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleInput} />
                    <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleInput} />
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput} />
                    <input type="submit" placeholder="Signup" />
                </form>
            </div>
        )
    }
}

export default AuthSignup