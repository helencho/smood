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
                    <Link to="/"><i className="fas fa-book"></i></Link>
                    <Link to="/dashboard"><i className="fas fa-tachometer-alt"></i></Link>
                    <Link to="/custom"><i className="fas fa-cog"></i></Link>
                    <Link to="/profile"><i className="far fa-user"></i></Link>
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
