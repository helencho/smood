import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MoodForm from './MoodForm'
import ActivityForm from './ActivityForm'
import HomeNav from '../Navigation/HomeNav'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        
        // If no user is logged in, redirect to splash page 
        if (!this.props.currentUser) {
            return <Redirect to="/splash" />
        }

        return (
            <div>
                <p>How are you today?</p>
                <MoodForm />
                <ActivityForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

export default connect(mapStateToProps)(Home)