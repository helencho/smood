import React, { Component } from 'react'

class ActivityButton extends Component {
    render() {
        const { activity, handleButton } = this.props

        return (
            <button onClick={() => handleButton('activity', activity.activity_id)}>
                <img alt={activity.activity_name} src={activity.activity_img} height='100' width='100' />
            </button>
        )
    }
}

export default ActivityButton