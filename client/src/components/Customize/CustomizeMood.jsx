import React, { Component } from 'react'
import SearchBar from './SearchBar'
import emotions from '../../utils/emotions.json'

class CustomizeMood extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    // Handle text input on key change 
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        const { input } = this.state 
        console.log(emotions) 
        console.log(this.state)

        return (
            <div className="customize-moods-container">
                <h1>Customize your moods</h1>
                <SearchBar placeholder="Search moods..." value={input} handleInput={this.handleInput} />
                {emotions.map((mood, index) => {
                    return <p key={index}><span role="img" aria-label="smiley">{mood}</span></p>
                })}
            </div>
        )
    }
}

export default CustomizeMood