import React, { Component } from 'react'

class EditEmojiModal extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        this.setState({
            input: this.props.emoji[`${this.props.linkTo}_name`]
        })
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    // On save, the new mood/activity gets saved to backend 
    // Update database 
    handleSubmit = (e) => {
        e.preventDefault() 
        console.log('updating name')
    }

    render() {
        const { emoji } = this.props

        console.log(this.state)

        return (
            <div>
                <p>X</p>
                <h1>Edit Emoji</h1>
                <p>{emoji.img}</p>
                <input type="text" value={this.state.input} onChange={this.handleInput} />
                <button>Save</button>
                <button><i className="fas fa-trash fa-fw"></i></button>
            </div>
        )
    }
}

export default EditEmojiModal