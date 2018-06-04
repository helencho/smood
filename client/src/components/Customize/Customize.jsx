import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMoods } from '../../actions/mood_actions'
import { getActivities } from '../../actions/activity_actions'
import '../../stylesheets/customize.css'

class CustomizePreview extends Component {
    render() {
        const { customType, emojis, linkTo } = this.props

        return (
            <div className="activities-preview">
                <h1>{customType}</h1>
                <div>
                    {emojis.map((emoji, index) => (
                        <p key={index}>{emoji.img}</p>
                    ))}
                </div>
                <Link to={`/custom/${linkTo}`}><button><i className="fas fa-plus fa-fw" /></button></Link>
            </div>
        )
    }
}

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
                <p>Keep it relevant</p>

                <div className="moods-preview">
                    <h1>Moods</h1>
                    <div>
                        {this.props.moods.map((mood, index) => (
                            <p key={index}>{mood.img}</p>
                        ))}
                    </div>
                    <Link to="/custom/mood"><button><i className="fas fa-plus fa-fw" /></button></Link>
                </div>

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