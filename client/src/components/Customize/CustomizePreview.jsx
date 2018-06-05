import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import EditEmojiModal from './EditEmojiModal'

class CustomizePreview extends Component {
    constructor() {
        super()
        this.state = {
            modalOpen: false,
            chosenEmoji: null
        }
    }

    // https://github.com/reactjs/react-modal/issues/133 
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

    // !!! 
    // When user updates mood and activity name 
    // Rerender the emoji with new name here 
    // !!! 

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
                                <EditEmojiModal
                                    emoji={chosenEmoji}
                                    linkTo={linkTo} />
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