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
        return (
            <div>
                <h1>MoodForm Page</h1>
                {this.state.moods.map(mood => <MoodButton mood={mood} />)}
                <button>Next</button>
            </div>
        )
    }
}

export default MoodForm