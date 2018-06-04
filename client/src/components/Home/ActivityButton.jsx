import React, { Component } from 'react'

class ActivityButton extends Component {
    render() {
        const { activity, handleButton } = this.props

        return (
            <button onClick={() => handleButton('activity', activity.activity_id)} className={`activity-button`}>
                <p>{activity.activity_img}</p>
                <p>{activity.activity_name}</p>
            </button>
        )
    }
}

export default ActivityButton