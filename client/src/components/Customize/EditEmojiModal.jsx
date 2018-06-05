import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editMood, deleteMood } from '../../actions/mood_actions'
import { editActivity, deleteActivity } from '../../actions/activity_actions'

class EditEmojiModal extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            message: ''
        }
    }

    // Mount mood/activity name to use as input value 
    componentDidMount() {
        this.setState({
            input: this.props.emoji[`${this.props.linkTo}_name`]
        })
    }

    // Handles text input 
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    // When user hits save, update mood/activity table 
    handleSubmit = (e) => {
        e.preventDefault()
        const updatedEmoji = {
            name: this.state.input,
            id: this.props.emoji[`${this.props.linkTo}_id`]
        }

        switch (this.props.linkTo) {
            case 'mood':
                this.props.editMood(updatedEmoji)
                break
            case 'activity':
                this.props.editActivity(updatedEmoji)
                break
            default:
                this.setState({
                    message: 'Error updating'
                })
        }
    }

    // When user clicks on trash can button 
    handleDelete = () => {
        const id = this.props.emoji[`${this.props.linkTo}_id`]

        switch(this.props.linkTo) {
            case 'mood': 
                this.props.deleteMood(id)
                break 
            case 'activity':
                this.props.deleteActivity(id)
                break 
            default:
                this.setState({
                    message: 'Error deleting'
                })
        }
    }

    // !!! 
    // Deleting moods or activities that have been used in an entry before causes an ERROR 
    // Deleting these moods or activities means also deleting all the entries as well 
    // Create new query 
    // !!! 

    render() {
        const { emoji } = this.props

        const renderPage = this.props.currentUser.id === emoji.user_id ?
            (
                <div>
                    <p>X</p>
                    <h1>Edit Emoji</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>{emoji.img}</p>
                        <input type="text" value={this.state.input} onChange={this.handleInput} />
                        <input type="submit" value="Save" />
                    </form>
                    <button onClick={this.handleDelete}><i className="fas fa-trash fa-fw" /></button>
                </div>
            ) : (
                <div>
                    <p>X</p>
                    <p>{emoji.img}</p>
                    <p>{this.state.input}</p>
                </div>
            )

        return (
            renderPage
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editMood: (mood) => dispatch(editMood(mood)),
        deleteMood: (id) => dispatch(deleteMood(id)),
        editActivity: (activity) => dispatch(editActivity(activity)),
        deleteActivity: (id) => dispatch(deleteActivity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmojiModal)