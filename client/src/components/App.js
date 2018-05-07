import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomeNav from './Navigation/HomeNav'
import Splash from './Splash/Splash'
import AuthLogin from './Session/AuthLogin'
import AuthSignup from './Session/AuthSignup'
import Profile from './Profile/Profile'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Entry from './Entry/Entry'
import Customize from './Customize/Customize'
import CustomizeMood from './Customize/CustomizeMood'
import CustomizeActivity from './Customize/CustomizeActivity'
import { getUser } from '../actions/session_actions'
import AuthRoute from '../utils/auth_utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  // componentDidMount() {
  //   this.props.getUser()
  // }

  render() {
    return (
      <div>
        <HomeNav />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <AuthRoute exact path="/" component={Home} />
          {/* <Route exact path="/" render={(props) => this.props.loggedIn ? <Route component={Home} /> : <Redirect to="/splash" />} /> */}
          <Route path="/splash" component={Splash} />
          <Route path="/signup" component={AuthSignup} />
          <Route path="/login" component={AuthLogin} />

          {/* <AuthRoute exact path='/users' component={ UsersIndexContainer } /> */}

          <Route path="/new" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/entry/:id" component={Entry} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/custom" component={Customize} />
          <Route path="/custom/mood" component={CustomizeMood} />
          <Route path="/custom/activity" component={CustomizeActivity} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUser: () => dispatch(getUser())
//   }
// }

export default withRouter(connect(mapStateToProps, null)(App))
