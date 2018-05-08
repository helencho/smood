import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'

class AuthLogin extends Component {
    constructor() {
        super()
        this.state = {
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleInput} />
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleInput} />
                    <input type="submit" placeholder="Login" />
                    <p>Don't have an account? <Link to="/signup">Signup</Link></p>
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
