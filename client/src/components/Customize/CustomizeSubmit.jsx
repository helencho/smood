import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CustomizeSubmit extends Component {
    render() {
        const { customType } = this.props 

        return (
            <div className="customize-submit-container">
                <h1>Saved {customType}!</h1>
                <Link to="/custom">Return to Customize Home</Link>
            </div>
        )
    }
}

export default CustomizeSubmit 