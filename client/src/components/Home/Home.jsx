import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MoodForm from './MoodForm'
import ActivityForm from './ActivityForm'
import EntrySubmission from './EntrySubmission'
import { connect } from 'react-redux'
import { newEntry } from '../../actions/entry_actions'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            page: 'mood',
            mood: null,
            activity: null
        }
    }

    // When user clicks on "Log entry" again
    componentWillReceiveProps() {
        this.setPage('mood')
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

    // When user clicks "Submit", create new entry 
    handleSubmit = () => {
        this.setPage('submit')
        const entry = {
            date: new Date(),
            note: 'lorem ipsum',
            mood_id: this.state.mood,
            activity_id: this.state.activity
        }
        this.props.newEntry(entry)
    }

    // Toggle between home, users, and projects pages, with home being the fallback 
    activePage = () => {
        const { mood, activity, page } = this.state;

        switch (page) {
            case 'mood':
                return <MoodForm handleButton={this.handleButton} setPage={this.setPage} mood={mood} />
            case 'activity':
                return <ActivityForm handleButton={this.handleButton} handleSubmit={this.handleSubmit} activity={activity} />
            case 'submit':
                return <EntrySubmission moodId={mood} />
            default:
                return <MoodForm handleButton={this.handleButton} setPage={this.setPage} mood={mood} />
        }
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
                <this.activePage />
            </div>
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
        newEntry: (entry) => dispatch(newEntry(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)