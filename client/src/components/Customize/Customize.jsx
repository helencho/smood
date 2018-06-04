import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import emotions from '../../utils/emotions.json'
import activities from '../../utils/activities.json'
import '../../stylesheets/customize.css'

class Customize extends Component {
    render() {
        // console.log(emotions)
        // console.log(activities)

        return (
            <div className="customize-container">
                <h1>Keep it relevant</h1>
                <Link to="/custom/mood">Customize Moods</Link>
                <Link to="/custom/activity">Customize Activities</Link>
            </div>
        )
    }
}

export default Customize