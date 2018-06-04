import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import emotions from '../../utils/emotions.json'
import activities from '../../utils/activities.json'
import '../../stylesheets/customize.css'

class Customize extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleInput = e => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        const { input } = this.state
        console.log(emotions)
        console.log(activities)

        return (
            <div className="customize-container">
                <h1>Customize Things</h1>
                <input type='text' value={input} placeholder="Search..." onChange={this.handeInput} />
                <Link to="/custom/mood">Moods</Link>
                <Link to="/custom/activity">Activities</Link>
            </div>
        )
    }
}

export default Customize