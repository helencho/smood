import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'


class AuthRoute extends Component {
    render() {
        const { path, component: Component, loggedIn } = this.props

        return (
            <Route
                exact path={path}
                render={(props) => (loggedIn ?
                    <Route component={Component} />
                    :
                    <Redirect to="/splash" />)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUser)
    }
}

export default withRouter(connect(mapStateToProps, null)(AuthRoute))
