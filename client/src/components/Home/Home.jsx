import React, { Component } from 'react'
import MoodForm from './MoodForm'
import ActivityForm from './ActivityForm'

class Home extends Component {
    render() {
        return (
            <div>
                <p>How are you today?</p>
                <MoodForm />
                <ActivityForm />
            </div>
        )
    }
}

export default Home