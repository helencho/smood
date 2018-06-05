import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

class EditEmojiModal extends Component {
    render() {
        const { emoji, linkTo } = this.props

        return (
            <div>
                <p>X</p>
                <h1>Edit Emoji</h1>
                <p>{emoji.img}</p>
                <p>{emoji[`${linkTo}_name`]}</p>
                <button>Save</button>
                <button><i className="fas fa-trash fa-fw"></i></button>
            </div>
        )
    }
}

class CustomizePreview extends Component {
    constructor() {
        super()
        this.state = {
            modalOpen: false,
            chosenEmoji: null
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    // Toggle modal and chosen emoji 
    toggleModal = (emoji) => {
        this.setState({
            modalOpen: !this.state.modalOpen,
            chosenEmoji: emoji
        })
    }

    render() {
        const { customType, emojis, linkTo } = this.props
        const { modalOpen, chosenEmoji } = this.state

        return (
            <div className="preview-container">
                <h1>{customType}</h1>
                <div className="emojis-container">
                    {emojis.map((emoji, index) => (
                        <div key={index}>
                            <p onClick={() => this.toggleModal(emoji)}>{emoji.img}</p>
                            <Modal
                                isOpen={modalOpen}
                                onRequestClose={this.toggleModal}
                                contentLabel="Edit Emoji Modal"
                                className="edit-emoji-modal"
                            >
                                <EditEmojiModal emoji={chosenEmoji} linkTo={linkTo} />
                            </Modal>
                        </div>
                    ))}
                    <Link to={`/custom/${linkTo}`}><button><i className="fas fa-plus fa-fw" /></button></Link>
                </div>
            </div>
        )
    }
}

export default CustomizePreview