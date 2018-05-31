import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import '../../stylesheets/logout.css'

class Logout extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.processLogout()
        }, 1200)
    }

    render() {
        return (
            <div className="logout-container">
                <div className="spinner">
                    <i className="fas fa-spinner fa-fw fa-5x fa-pulse"></i>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Logout) 