import React, { Component } from 'react'
import SearchBar from './SearchBar'


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
        return (
            <div>
                <h1>Customize Mood</h1>
                <p>Keep your moods relevant</p>
                <SearchBar placeholder="Search moods..." value="happy" handleInput={this.handleInput} />
            </div>
        )
    }
}

export default CustomizeMood