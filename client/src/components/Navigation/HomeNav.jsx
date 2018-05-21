import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../actions/session_actions'
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

    render() {
        const navClass = this.state.sidebar ? null : `navigation-hidden`

        return (
            this.props.currentUser ?
                <div>
                    <div className="top-nav">
                        <button onClick={this.handleSlideout}><i className="fas fa-bars fa-fw fa-2x"></i></button>
                        <h1>mood</h1>
                    </div>
                    <div className={`navigation ${navClass}`}>
                        <Link to="/" onClick={this.handleSlideout}><i className="fas fa-book fa-fw fa-3x"></i><p>Log</p></Link>
                        <Link to="/dashboard" onClick={this.handleSlideout}><i className="fas fa-tachometer-alt fa-fw fa-3x"></i><p>Dashboard</p></Link>
                        <Link to="/custom" onClick={this.handleSlideout}><i className="fas fa-cog fa-fw fa-3x"></i><p>Customize</p></Link>
                        <Link to="/profile" onClick={this.handleSlideout}><i className="fas fa-user-alt fa-fw fa-3x"></i><p>Profile</p></Link>
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
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
