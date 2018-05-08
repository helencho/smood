import React, { Component } from 'react'

class MoodButton extends Component {
    render() {
        const { mood, handleButton } = this.props
        return (
            <button onClick={() => handleButton('mood', mood.mood_id)}>
                <img src={mood.mood_img} alt={mood.mood_name} height="200" width="200" />
            </button>
        )
    }
}

export default MoodButton