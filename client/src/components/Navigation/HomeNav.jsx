import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../actions/session_actions'

class HomeNav extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return (
            this.props.currentUser ?
                <div>
                    <Link to="/">mood</Link>{" "}
                    <Link to="/dashboard">Dashboard</Link>{" "}
                    <Link to="/custom">Customize</Link>{" "}
                    <Link to="/profile">Profile</Link>{" "}
                </div>
                :
                null
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
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
