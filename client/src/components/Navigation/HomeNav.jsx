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
                        <button onClick={this.handleSlideout}><i className="fas fa-bars fa-fw fa-3x"></i></button>
                    </div>
                    <div className={`navigation ${navClass}`}>
                        <Link to="/"><i className="fas fa-book fa-fw fa-3x"></i> Log</Link>
                        <Link to="/dashboard"><i className="fas fa-tachometer-alt fa-fw fa-3x"></i> Dashboard</Link>
                        <Link to="/custom"><i className="fas fa-cog fa-fw fa-3x"></i> Customize</Link>
                        <Link to="/profile"><i className="far fa-user fa-fw fa-3x"></i> Profile</Link>
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
