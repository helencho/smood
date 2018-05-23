import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getActivities } from '../../actions/activity_actions'
import ActivityButton from './ActivityButton'

class ActivityForm extends Component {
    componentDidMount() {
        this.props.getActivities()
    }

    render() {
        const { activities, activity } = this.props

        return (
            <div className="activity-form">
                <h1>What were you doing?</h1>
                <div className="activity-button-container">
                    {activities.map((activity) =>
                        <ActivityButton activity={activity} key={activity.activity_id} handleButton={this.props.handleButton} />
                    )}
                </div>
                <button disabled={!activity} onClick={this.props.handleSubmit}>Submit</button>
            </div>
        )
    }
}

// Connect state to props 
const mapStateToProps = (state) => {
    return {
        activities: state.activities.activities,
        error: state.activities.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getActivities: () => dispatch(getActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm)