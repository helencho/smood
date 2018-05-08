import React, { Component } from 'react'

class ActivityButton extends Component {
    render() {
        return (
            <button>{this.props.activity}</button>
        )
    }
}

export default ActivityButton