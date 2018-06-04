import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Presentational 
class CustomizeForm extends Component {
    render() {
        const { customType, emojis, input, chosenEmoji, moodName, handleSubmit, handleInput, handleClick } = this.props 

        return (
            <div className="customize-form-container">
                <h1>Customize your {customType}</h1>
                <form className="chosen-container" onSubmit={handleSubmit}>
                    <p>{chosenEmoji}</p>
                    <input type="text" placeholder="Name" name="moodName" value={moodName} onChange={handleInput} />
                    <input type="submit" value="Save" disabled={!chosenEmoji || !moodName} />
                </form>
                <div className="emojis-container">
                    {emojis.map((mood, index) => (
                        <p key={index}><span role="img" aria-label="smiley" onClick={() => handleClick(mood)}>{mood}</span></p>
                    ))}
                </div>
            </div>
        )
    }
}

export default CustomizeForm 