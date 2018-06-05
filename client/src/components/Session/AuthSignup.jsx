import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import SplashTitle from '../Splash/SplashTitle'
import AOS from 'aos'
import { capitalize } from '../../utils/capitalize'

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

    componentDidMount() {
        AOS.init({
            once: true
        })
    }

    componentWillReceiveProps() {
        AOS.refresh()
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

        // Email isn't typed in 
        if (!email) {
            message.push('email is needed')
        }

        // Password is at least 6 characters long 
        if (password.length < 6) {
            message.push('password must be at least 6 characters')
        }

        // If there are no error messages, process the form 
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

    render() {
        const { name, email, password, message } = this.state
        const errorMessage = message.length > 0
            ?
            <p class="auth-message">{capitalize(message.join(' & '))}</p>
            :
            null

        if (this.props.currentUser) {
            return <Redirect to="/" />
        }

        return (
            <div className="auth-container gradient-warm">
                <SplashTitle />
                <form onSubmit={this.handleSubmit} data-aos="fade-up">
                    {/* https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md */}
                    <h1>Sign up for feelings <span role="img" aria-label="fire">🔥</span></h1>
                    <div className="input-container">
                        <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleInput} />
                        <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleInput} />
                        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput} />
                    </div>
                    <div className="auth-message-container">
                        {errorMessage}
                    </div>
                    <div className="submit-container">
                        <input type="submit" value="Register" className="button" />
                    </div>
                </form>
                <p className="account-message">Have an account? <Link to="/login">Login</Link></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        error: state.session.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignup)