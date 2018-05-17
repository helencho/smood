import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SplashTitle from '../Splash/SplashTitle'
import '../../stylesheets/auth.css'

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
        let user = {
            name: this.state.name,
            username: this.state.email,
            password: this.state.password
        }
        this.props.processForm(user)
    }

    render() {
        const { name, email, password } = this.state

        if (this.props.currentUser) {
            return <Redirect to="/" />
        }

        return (
            <div className="auth-container gradient-warm">
                <SplashTitle />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleInput} />
                    <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleInput} />
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput} />
                    <input type="submit" placeholder="Signup" />
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