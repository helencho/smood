import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import SplashTitle from '../Splash/SplashTitle'
import AOS from 'aos'
import { capitalize } from '../../utils/capitalize'

class AuthLogin extends Component {
    constructor() {
        super()
        this.state = {
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
        const { email, password } = this.state
        let message = []

        // Username is at least 6 letters long  
        if (email.length <= 6) {
            message.push('email must be valid length')
        }
        // Password is at least 6 characters long 
        if (password.length < 6) {
            message.push('password must be at least 6 characters')
        }

        if (message.length === 0) {
            let user = {
                username: this.state.email,
                password: this.state.password
            }
            this.props.processForm(user)
        } else {
            this.setState({ message })
        }
    }

    handleDemoClick = () => {
        this.setState({
            email: 'demo@email.com',
            password: '123456'
        })
    }

    render() {
        const { email, password, message } = this.state
        const errorMessage = message.length
            ?
            <p className="auth-message">{capitalize(message.join(' & '))}</p>
            :
            null

        if (this.props.currentUser) {
            return <Redirect to="/" />
        }

        return (
            <div className="auth-container auth-login gradient-warm">
                <SplashTitle />
                <form onSubmit={this.handleSubmit} data-aos="fade-up">
                    {/* https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md */}
                    <h1>Welcome back <span role="img" aria-label="praise">🙌</span></h1>
                    <div className="input-container">
                        <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleInput} />
                        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput} />
                    </div>
                    <div className="auth-message-container">
                        {errorMessage}
                    </div>
                    <div className="submit-container">
                        <input type="button" value="Demo" className="button" onClick={this.handleDemoClick} />
                        <input type="submit" value="Login" className="button" />
                    </div>
                </form>
                <p className="account-message">Don't have an account? <Link to="/signup">Register</Link></p>
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
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)
