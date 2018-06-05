import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editMood, deleteMood } from '../../actions/mood_actions'
import { editActivity, deleteActivity } from '../../actions/activity_actions'

class EditEmojiModal extends Component {
    constructor(props) {
        super(props)
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

    // Set message in state 
    setMessage = (message) => {
        this.setState({
            message
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
                this.setMessage('Saved mood!')
                break
            case 'activity':
                this.props.editActivity(updatedEmoji)
                this.setMessage('Saved mood!')
                break
            default:
                this.setMessage('Error updating :(')
                break
        }
    }

    // When user clicks on trash can button 
    handleDelete = () => {
        const id = this.props.emoji[`${this.props.linkTo}_id`]

        switch (this.props.linkTo) {
            case 'mood':
                this.props.deleteMood(id)
                this.setMessage('Deleted mood')
                break
            case 'activity':
                this.props.deleteActivity(id)
                this.setMessage('Deleted activity')
                break
            default:
                this.setMessage('Error deleting')
                break
        }
    }

    // !!! 
    // Deleting moods or activities that have been used in an entry before causes an ERROR 
    // Deleting these moods or activities means also deleting all the entries as well 
    // Create new query 
    // !!! 

    render() {
        const { emoji, linkTo, toggleModal } = this.props

        const renderPage = this.props.currentUser.id === emoji.user_id ?
            (
                <div className="edit-container">
                    <div className="top">
                        <h1>Edit {linkTo}</h1>
                        <i className="fas fa-times fa-fw fa-2x exit" onClick={toggleModal} />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <p>{emoji.img}</p>
                        <input type="text" value={this.state.input} onChange={this.handleInput} />
                        <div className="button-container">
                            <input type="submit" value="Save" className="save" />
                            <input type="button" value="Cancel" className="cancel" onClick={toggleModal} />
                        </div>
                    </form>
                    <div className="bottom">
                        <button onClick={this.handleDelete}><i className="fas fa-trash fa-fw fa-2x" /></button>
                    </div>
                </div>
            ) : (
                <div className="no-edit-container">
                    <i className="fas fa-times fa-fw fa-2x" />
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