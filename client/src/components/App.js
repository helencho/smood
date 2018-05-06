import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Splash from './Splash/Splash'
import AuthLogin from './Session/AuthLogin'
import AuthSignup from './Session/AuthSignup'
import Profile from './Profile/Profile'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Note from './Note/Note'
import Customize from './Customize/Customize'
import CustomizeMood from './Customize/CustomizeMood'
import CustomizeActivity from './Customize/CustomizeActivity'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/signup" component={AuthSignup} />
        <Route path="/login" component={AuthLogin} />
        <Route path="/home" component={Home} />
        <Route path="/new" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/note/:id" component={Note} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/custom" component={Customize} />
        <Route path="/custom/mood" component={CustomizeMood} />
        <Route path="/custom/activity" component={CustomizeActivity} />
      </Switch>
    );
  }
}

export default App;
