import React, { Component } from 'react'
// import { connect } from 'redux'
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

    render() {
        const { activities } = this.state

        return (
            <div>
                <h1>ActivityForm Page</h1>
                <form onSubmit={this.props.handleSubmit}>
                    {activities.map((activity, idx) =>
                        <ActivityButton activity={activity} key={idx} />
                    )}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

// Connect state to props 

export default ActivityForm