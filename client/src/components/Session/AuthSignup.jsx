import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SplashTitle from '../Splash/SplashTitle'

class AuthSignup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            message: []
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name, email, password } = this.state
        let message = []

        // User's name is at least 2 letters long 
        if (name.length <= 2) {
            message.push('name must be at least 2 letters')
        }

        // Password is at least 6 characters long 
        if (password.length <= 6) {
            message.push('password must be at least 6 characters')
        }

        if (message.length === 0) {
            let user = {
                name: this.state.name,
                username: this.state.email,
                password: this.state.password
            }
            this.props.processForm(user)
        } else {
            this.setState({ message })
        }
    }

    // Capitalize the first letter of the string 
    capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    render() {
        const { name, email, password, message } = this.state
        const errorMessage = message.length > 0 ? this.capitalize(message.join(' & ')) : ''

        if (this.props.currentUser) {
            return <Redirect to="/" />
        }

        return (
            <div className="auth-container gradient-warm">
                <SplashTitle />
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign up for feelings 🔥</h1>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleInput} />
                    <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleInput} />
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput} />
                    <input type="submit" value="Register" className="button" />
                    <p id="auth-message">{errorMessage}</p>
                    <p>Have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignup)