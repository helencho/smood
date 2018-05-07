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


class App extends Component {
  render() {
    return (
      <div>
        <HomeNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/splash" component={Splash} />
          <Route path="/signup" component={AuthSignup} />
          <Route path="/login" component={AuthLogin} />
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

export default App