import React, { Component } from 'react'
import AOS from 'aos'

// Presentational 
class CustomizeForm extends Component {
    componentDidMount() {
        AOS.init()
    }
    render() {
        const { customType, emojis, input, chosenEmoji, chosenName, handleSubmit, handleInput, handleClick } = this.props

        return (
            <div className="customize-form-container">
                <h1>Add new {customType}</h1>
                <form className="chosen-container" onSubmit={handleSubmit}>
                    <p>{chosenEmoji || '❔'}</p>
                    <div className="inputs">
                        <input type="text" placeholder="Name" name="chosenName" value={chosenName} onChange={handleInput} />
                        <input type="submit" value="Save" disabled={!chosenEmoji || !chosenName} />
                    </div>
                </form>
                <div className="emojis-container" data-aos="fade-up">
                    {emojis.map((mood, index) => (
                        <p key={index}><span role="img" aria-label="smiley" onClick={() => handleClick(mood)}>{mood}</span></p>
                    ))}
                </div>
            </div>
        )
    }
}

export default CustomizeForm 