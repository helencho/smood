import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newMood } from '../../actions/mood_actions'
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
        const mood = {
            name: moodName,
            url: chosenEmoji
        }
        this.props.processNewMood(mood)
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

const mapDispatchToProps = (dispatch) => {
    return {
        processNewMood: (mood) => dispatch(newMood(mood))
    }
}

export default connect(null, mapDispatchToProps)(CustomizeMood)