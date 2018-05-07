import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class HomeNav extends Component {
    render() {
        return (
            this.props.currentUser ?
                <div>
                    <Link to="/home">mood</Link>{" "}
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

export default connect(mapStateToProps, null)(HomeNav)
