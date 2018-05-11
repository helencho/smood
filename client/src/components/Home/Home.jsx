import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MoodForm from './MoodForm'
import ActivityForm from './ActivityForm'
import { connect } from 'react-redux'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            page: '0',
            mood: null,
            activity: null
        }
    }

    // Whenever user chooses a mood or activity, update state 
    handleButton = (name, id) => {
        this.setState({
            [name]: id
        })
    }

    // When user clicks "Next", set page to activity
    setPage = (page) => {
        this.setState({
            page
        })
    }

    // When user clicks "Submit"
    handleSubmit = () => {
        console.log('Submit entry')
    }

    render() {
        const { mood, activity } = this.state
        console.log(this.state)

        // If no user is logged in, redirect to splash page 
        if (!this.props.currentUser) {
            return <Redirect to="/splash" />
        }

        return (
            <div>
                <p>How are you today?</p>
                <MoodForm handleButton={this.handleButton} setPage={this.setPage} mood={mood} />
                <ActivityForm handleButton={this.handleButton} handleSubmit={this.handleSubmit} activity={activity} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

export default connect(mapStateToProps)(Home)