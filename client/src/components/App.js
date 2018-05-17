import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
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
import AuthRoute from '../utils/auth_utils'
import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div>
        <HomeNav />
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <Route path="/splash" component={Splash} />
          <Route path="/signup" component={AuthSignup} />
          <Route path="/login" component={AuthLogin} />
          <AuthRoute exact path="/new" component={Home} />
          <AuthRoute exact path="/dashboard" component={Dashboard} />
          <AuthRoute exact path="/entry/:id" component={Entry} />
          <AuthRoute exact path="/profile" component={Profile} />
          <AuthRoute exact path="/custom" component={Customize} />
          <AuthRoute path="/custom/mood" component={CustomizeMood} />
          <AuthRoute path="/custom/activity" component={CustomizeActivity} />
        </Switch>
      </div>
    );
  }
}

export default App