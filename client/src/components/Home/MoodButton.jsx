import React, { Component } from 'react'

class MoodButton extends Component {
    render() {
        return (
            <button>{this.props.mood}</button>
        )
    }
}

export default MoodButton