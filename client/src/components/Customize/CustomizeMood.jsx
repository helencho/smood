import React, { Component } from 'react'
import SearchBar from './SearchBar'
import emotions from '../../utils/emotions.json'

class CustomizeMood extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            chosenEmoji: '',
            moodName: ''
        }
    }

    // Handle text input on key change 
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // When user clicks on an emoji 
    handleClick = (emoji) => {
        this.setState({
            chosenEmoji: emoji
        })
    }

    // When user clicks save emoji 
    handleSubmit = (e) => {
        e.preventDefault() 
        const { chosenEmoji, moodName } = this.state 
        // Send request to save to backend 
        console.log('Saving emoji!') 
    }

    render() {
        const { input, chosenEmoji, moodName } = this.state
        console.log(this.state)

        return (
            <div className="customize-mood-container">
                <h1>Customize your moods</h1>
                {/* <SearchBar placeholder="Search moods..." value={input} handleInput={this.handleInput} /> */}
                <form className="chosen-container" onSubmit={this.handleSubmit}>
                    <p>{chosenEmoji}</p>
                    <input type="text" placeholder="Name" name="moodName" value={moodName} onChange={this.handleInput} />
                    <input type="submit" value="Save" disabled={!chosenEmoji || !moodName} />
                </form>
                <div className="emojis-container">
                    {emotions.map((mood, index) => (
                        <p key={index}><span role="img" aria-label="smiley" onClick={() => this.handleClick(mood)}>{mood}</span></p>
                    ))}
                </div>
            </div>
        )
    }
}

export default CustomizeMood