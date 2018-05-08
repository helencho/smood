import React, { Component } from 'react'
import MoodButton from './MoodButton'

class MoodForm extends Component {
    constructor() {
        super()
        this.state = {
            moods: ['happy', 'calm', 'meh', 'upset', 'sad']
        }
    }

    render() {
        const { moods } = this.state

        return (
            <div>
                <h1>MoodForm Page</h1>
                {moods.map((mood, idx) =>
                    <MoodButton mood={mood} key={idx} />
                )}
                <button>Next</button>
            </div>
        )
    }
}

export default MoodForm