import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Presentataional 
class CustomizeSubmit extends Component {
    render() {
        const { customType } = this.props 

        return (
            <div className="customize-submit-container">
                <h1>Saved {customType}!</h1>
                <Link to="/custom"><button>Return to Customize Home</button></Link>
            </div>
        )
    }
}

export default CustomizeSubmit 