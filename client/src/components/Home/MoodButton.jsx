import React, { Component } from 'react'

class MoodButton extends Component {
    render() {
        const { mood, handleButton } = this.props
        
        return (
            <button onClick={() => handleButton('mood', mood.mood_id)} className="mood-button">
                <img src={mood.mood_img} alt={mood.mood_name} />
                <p>{mood.mood_name}</p>
            </button>
        )
    }
}

export default MoodButton