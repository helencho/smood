import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

class EditEmojiModal extends Component {
    render() {
        return (
            <h1>Edit Emoji</h1>
        )
    }
}

class CustomizePreview extends Component {
    constructor() {
        super()
        this.state = {
            modalOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const { customType, emojis, linkTo } = this.props
        const { modalOpen } = this.state

        return (
            <div className="preview-container">
                <h1>{customType}</h1>
                <div className="emojis-container">
                    {emojis.map((emoji, index) => (
                        <div>
                            <p onClick={this.toggleModal} key={index}>{emoji.img}</p>
                            <Modal
                                isOpen={modalOpen}
                                onRequestClose={this.toggleModal}
                                contentLabel="Edit Emoji Modal"
                            >
                                <EditEmojiModal />
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