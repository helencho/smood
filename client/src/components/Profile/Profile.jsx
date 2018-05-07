import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'

class Profile extends Component {
    handleLogout = e => {
        this.props.processLogout()
    }

    render() {
        // Redirect user to home page after logging out 
        if (!this.props.currentUser) {
            return <Redirect to="/splash" />
        }

        return (
            <div>
                <h1>User Profile Page</h1>
                <button onClick={this.handleLogout}>Logout</button>
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
        processLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)