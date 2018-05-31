import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../actions/session_actions'
import { logout } from '../../actions/session_actions'

import '../../stylesheets/navigation.css'

class HomeNav extends Component {
    constructor() {
        super()
        this.state = {
            sidebar: false
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    handleSlideout = () => {
        this.setState({
            sidebar: !this.state.sidebar
        })
    }

    handleLogout = e => {
        this.props.processLogout()
    }

    render() {
        const navClass = this.state.sidebar ? null : `navigation-hidden`

        return (
            this.props.currentUser ?
                <div>
                    <div className="top-nav">
                        <button onClick={this.handleSlideout}><i className="fas fa-bars fa-fw fa-2x"></i></button>
                    </div>
                    <div className={`navigation ${navClass}`}>
                        <Link to="/" onClick={this.handleSlideout}><i className="fas fa-book fa-fw fa-3x" /><p>Log</p></Link>
                        <Link to="/dashboard" onClick={this.handleSlideout}><i className="fas fa-tachometer-alt fa-fw fa-3x" /><p>Dashboard</p></Link>
                        <Link to="/custom" onClick={this.handleSlideout}><i className="fas fa-cog fa-fw fa-3x" /><p>Customize</p></Link>
                        <Link to="/profile" onClick={this.handleSlideout}><i className="fas fa-user-alt fa-fw fa-3x" /><p>Profile</p></Link>
                        <a onClick={this.handleLogout}><i className="fas fa-sign-out-alt fa-fw fa-3x" /><p>Signout</p></a>
                    </div>
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
        getUser: () => dispatch(getUser()),
        processLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
