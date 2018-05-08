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

    handleButton = (name, id) => {
        this.setState({
            [name]: id
        })
    }

    setPage = page => {
        // Increment page (redux) 
        // this.setState({
        //     page
        // })
    }

    render() {
        console.log(this.state)
        // If no user is logged in, redirect to splash page 
        if (!this.props.currentUser) {
            return <Redirect to="/splash" />
        }

        return (
            <div>
                <p>How are you today?</p>
                <MoodForm handleButton={this.handleButton} />
                <ActivityForm />
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