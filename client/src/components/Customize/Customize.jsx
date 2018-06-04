import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMoods } from '../../actions/mood_actions'
import { getActivities } from '../../actions/activity_actions'
import '../../stylesheets/customize.css'

class Customize extends Component {
    componentDidMount() {
        this.props.getMoods()
        this.props.getActivities()
    }

    render() {
        console.log(this.props.activities)

        return (
            <div className="customize-container">
                <h1>Customize</h1>
                <p>Keep it relevant</p>
                <div className="moods-preview">
                    <h1>Moods</h1>
                    <div>
                        {this.props.moods.map((mood, index) => (
                            <p key={index}>{mood.mood_img}</p>
                        ))}
                    </div>
                    <Link to="/custom/mood"><button><i className="fas fa-plus fa-fw" /></button></Link>
                </div>
                <div className="activities-preview">
                    <h1>Activities</h1>
                    <div>
                        {this.props.activities.map((activity, index) => (
                            <p key={index}>{activity.activity_img}</p>
                        ))}
                    </div>
                    <Link to="/custom/activity"><button><i className="fas fa-plus fa-fw" /></button></Link>
                </div>

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