import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMoods } from '../../actions/mood_actions'
import { getActivities } from '../../actions/activity_actions'
import CustomizePreview from './CustomizePreview'
import '../../stylesheets/customize.css'

// Smart (intelligent, sentient, all-knowing...)
class Customize extends Component {
    // Mount user's moods and activities from state 
    componentDidMount() {
        this.props.getMoods()
        this.props.getActivities()
    }

    render() {
        return (
            <div className="customize-container">
                <h1>Customize</h1>
                <p>Keep it relevant <span role="img" aria-label="sparkle">✨</span></p>

                <CustomizePreview
                    customType="moods"
                    linkTo="mood"
                    emojis={this.props.moods}
                />

                <CustomizePreview
                    customType="activities"
                    linkTo="activity"
                    emojis={this.props.activities}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        moods: state.moods.moods,
        activities: state.activities.activities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoods: () => dispatch(getMoods()),
        getActivities: () => dispatch(getActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customize)