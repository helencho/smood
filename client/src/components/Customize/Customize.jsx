import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import emotions from '../../utils/emotions.json'
// import activities from '../../utils/activities.json'
import '../../stylesheets/customize.css'

class Customize extends Component {
    render() {
        // console.log(emotions)
        // console.log(activities)

        return (
            <div className="customize-container">
                <h1>Customize</h1>
                <p>Keep it relevant</p>
                <Link to="/custom/mood"><button>Moods</button></Link>
                <Link to="/custom/activity"><button>Activities</button></Link>
            </div>
        )
    }
}

export default Customize