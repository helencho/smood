import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EntrySubmission extends Component {
    constructor() {
        super()
        this.state = {
            messages: {
                1: `Life is better when you're laughing.`,
                2: `Good for you!`,
                3: `Without losing, winning isn't so great.`,
                4: `Sadness flies on the wings of time.`,
                5: `Why not try something new?`
            },
            defaults: [
                `Good for you.`,
                `You're doing good.`,
                `Keep going!`,
                `Challenge yourself.`
            ]
        }
    }

    randomElement = (array) => {
        const i = Math.floor(Math.random() * array.length)
        return array[i]
    }

    render() {
        const { messages, defaults } = this.state
        const { moodId } = this.props

        const submitMsg = messages[moodId] ? messages[moodId] : this.randomElement(defaults)

        return (
            <div className="submission-page">
                <h1>{submitMsg}</h1>
                <Link to="/"><button>Submit another entry</button></Link>
                <Link to="/dashboard"><button>Go to dashboard</button></Link>
            </div>
        )
    }
}

export default EntrySubmission