import React, { Component } from 'react'
import SearchBar from './SearchBar'
import activities from '../../utils/activities.json'

class CustomizeActivity extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    // Handle text input on key change 
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        const { input } = this.state
        console.log(activities)

        const renderActivities = []

        for (let key in activities) {
            renderActivities.push(activities[key].src)
        }

        console.log(renderActivities)

        // User click on emoji, add a name to emoji 
        // Save emoji 

        return (
            <div className="customize-activity-container">
                <h1>Customize your activities</h1>
                <SearchBar placeholder="Search activities..." value={input} handleInput={this.handleInput} />
                <div className="emojis-container">
                    {renderActivities.map((emoji, index) => (
                        <p key={index}>{emoji}</p>
                    ))}
                </div>
            </div>
        )
    }
}

export default CustomizeActivity