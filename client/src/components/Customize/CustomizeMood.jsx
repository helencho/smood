import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { newMood } from '../../actions/mood_actions'
import SearchBar from './SearchBar'
import CustomizeSubmit from './CustomizeSubmit'
import CustomizeForm from './CustomizeForm'
import emotions from '../../utils/emotions.json'

// Smart 
class CustomizeMood extends Component {
    constructor() {
        super()
        this.state = {
            page: 'custom',
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

    // Toggles page (Ex. When user clicks "Save", set page to submit)
    setPage = (page) => {
        this.setState({
            page
        })
    }

    // When user clicks "save" emoji, send request to backend 
    handleSubmit = (e) => {
        e.preventDefault()
        const { chosenEmoji, moodName } = this.state
        const mood = {
            name: moodName,
            url: chosenEmoji
        }
        this.props.processNewMood(mood)
        this.setPage('submit')
    }

    // Renders page based on state 
    activePage = () => {
        const { page, input, chosenEmoji, moodName } = this.state
        switch (page) {
            case 'custom':
                return <CustomizeForm
                    customType="mood"
                    emojis={emotions}
                    input={input}
                    chosenEmoji={chosenEmoji}
                    moodName={moodName}
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    handleClick={this.handleClick}
                />
            case 'submit':
                return <CustomizeSubmit 
                    customType="mood"
                />
            default:
                return <CustomizeForm
                    customType="mood"
                    emojis={emotions}
                    input={input}
                    chosenEmoji={chosenEmoji}
                    moodName={moodName}
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    handleClick={this.handleClick}
                />
        }
    }

    render() {
        return (
            <this.activePage />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processNewMood: (mood) => dispatch(newMood(mood))
    }
}

export default connect(null, mapDispatchToProps)(CustomizeMood)