import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editMood } from '../../actions/mood_actions'
import { editActivity } from '../../actions/activity_actions'

class EditEmojiModal extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            message: ''
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
        const updatedEmoji = {
            name: this.state.input,
            id: this.props.emoji[`${this.props.linkTo}_id`]
        }
        switch (this.props.linkTo) {
            case 'mood':
                // update mood 
                this.props.editMood(updatedEmoji)
                break
            case 'activity':
                // update activity 
                this.props.editActivity(updatedEmoji)
                break 
            default:
                this.setState({
                    message: 'Error'
                })
        }
        // console.log(updatedEmoji)
    }

    // When user clicks on trash can button 
    handleDelete = (e) => {
        console.log('Delete emoji?')
    }

    render() {
        const { emoji } = this.props

        return (
            <div>
                <p>X</p>
                <h1>Edit Emoji</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>{emoji.img}</p>
                    <input type="text" value={this.state.input} onChange={this.handleInput} />
                    <input type="submit" value="Save" />
                </form>
                <button><i className="fas fa-trash fa-fw"></i></button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editMood: (mood) => dispatch(editMood(mood)),
        editActivity: (activity) => dispatch(editActivity(activity))
    }
}

export default connect(null, mapDispatchToProps)(EditEmojiModal)