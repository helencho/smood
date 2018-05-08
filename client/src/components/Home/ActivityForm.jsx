import React, { Component } from 'react'
import ActivityButton from './ActivityButton'

class ActivityForm extends Component {
    constructor() {
        super()
        this.state = {
            activities: [
                'exercising',
                'reading',
                'eating',
                'playing video games',
                'sex',
                'hanging out with friends',
                'singing',
                'spring cleaning'
            ]
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('Submitting entry')
    }

    render() {
        return (
            <div>
                <h1>ActivityForm Page</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.state.activities.map(activity => <ActivityButton activity={activity} />)}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ActivityForm