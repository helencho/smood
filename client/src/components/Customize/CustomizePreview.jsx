import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Presentational 
class CustomizePreview extends Component {
    render() {
        const { customType, emojis, linkTo } = this.props

        return (
            <div className="preview-container">
                <h1>{customType}</h1>
                <div>
                    {emojis.map((emoji, index) => (
                        <p key={index}>{emoji.img}</p>
                    ))}
                </div>
                <Link to={`/custom/${linkTo}`}><button><i className="fas fa-plus fa-fw" /></button></Link>
            </div>
        )
    }
}

export default CustomizePreview