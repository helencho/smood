import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newActivity } from '../../actions/activity_actions'
import SearchBar from './SearchBar'
import CustomizeForm from './CustomizeForm'
import CustomizeSubmit from './CustomizeSubmit'
import activities from '../../utils/activities.json'

// Smart 
class CustomizeActivity extends Component {
    constructor() {
        super()
        this.state = {
            page: 'custom',
            chosenEmoji: '',
            chosenName: ''
        }
    }

    // Handle text input on key change 
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // When user clicks on an emoji 
    handleClick = (emoji) => {
        this.setState({
            chosenEmoji: emoji
        })
    }

    // Toggles page (Ex. When user clicks "Save", set page to submit)
    setPage = (page) => {
        this.setState({
            page
        })
    }

    // When user clicks "save" emoji, send request to backend 
    handleSubmit = (e) => {
        e.preventDefault()
        const { chosenEmoji, chosenName } = this.state
        const activity = {
            name: chosenName,
            url: chosenEmoji
        }
        this.props.processNewActivity(activity)
        this.setPage('submit')
    }

    // Renders page based on state 
    activePage = () => {
        const { page, input, chosenEmoji, chosenName } = this.state

        const renderActivities = []

        for (let key in activities) {
            renderActivities.push(activities[key].src)
        }

        switch (page) {
            case 'custom':
                return <CustomizeForm
                    customType="activity"
                    emojis={renderActivities}
                    input={input}
                    chosenEmoji={chosenEmoji}
                    chosenName={chosenName}
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    handleClick={this.handleClick}
                />
            case 'submit':
                return <CustomizeSubmit
                    customType="activity"
                />
            default:
                return <CustomizeForm
                    customType="activity"
                    emojis={renderActivities}
                    input={input}
                    chosenEmoji={chosenEmoji}
                    chosenName={chosenName}
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    handleClick={this.handleClick}
                />
        }
    }

    render() {
        console.log(this.state) 

        return (
            <this.activePage />
        )

        // return (
        //     <div className="customize-activity-container">
        //         <h1>Customize your activities</h1>
        //         <div className="emojis-container">
        //             {renderActivities.map((emoji, index) => (
        //                 <p key={index}>{emoji}</p>
        //             ))}
        //         </div>
        //     </div>
        // )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processNewActivity: (activity) => dispatch(newActivity(activity))
    }
}

export default connect(null, mapDispatchToProps)(CustomizeActivity)