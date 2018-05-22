import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import SplashTitle from '../Splash/SplashTitle'
import AOS from 'aos'

class AuthLogin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
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
        let user = {
            username: this.state.email,
            password: this.state.password
        }
        this.props.processForm(user)
    }

    render() {
        const { email, password } = this.state

        if (this.props.currentUser) {
            return <Redirect to="/" />
        }

        return (
            <div className="auth-container gradient-warm">
                <SplashTitle />
                <form onSubmit={this.handleSubmit} data-aos="fade-up">
                    <h1>Welcome back 🙌</h1>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleInput} />
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput} />
                    <input type="submit" value="Login" className="button" />
                    <p>Don't have an account? <Link to="/signup">Register</Link></p>
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
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)
