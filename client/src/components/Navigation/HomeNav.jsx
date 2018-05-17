import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../actions/session_actions'
import '../../stylesheets/navigation.css'

class HomeNav extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return (
            this.props.currentUser ?
                <div className="navigation">
                    <Link to="/"><i className="fas fa-book fa-fw fa-3x"></i></Link>
                    <Link to="/dashboard"><i className="fas fa-tachometer-alt fa-fw fa-3x"></i></Link>
                    <Link to="/custom"><i className="fas fa-cog fa-fw fa-3x"></i></Link>
                    <Link to="/profile"><i className="far fa-user fa-fw fa-3x"></i></Link>
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
