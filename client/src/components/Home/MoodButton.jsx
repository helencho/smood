import React, { Component } from 'react'

class MoodButton extends Component {
    render() {
        const { md, handleButton, mood } = this.props
        const activeMood = mood && md.mood_id === mood ? `active` : null
        
        return (
            <button onClick={() => handleButton('mood', md.mood_id)} className={`mood-button mood-button-${activeMood}`}>
                <p>{md.mood_img}</p>
                <p>{md.mood_name}</p>
            </button>
        )
    }
}

export default MoodButton