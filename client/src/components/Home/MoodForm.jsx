import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMoods } from '../../actions/mood_actions'
import MoodButton from './MoodButton'
import '../../stylesheets/home.css'

class MoodForm extends Component {
    componentDidMount() {
        this.props.getMoods()
    }

    render() {
        const { moods, mood } = this.props

        return (
            <div className="mood-form">
                <h1>How are you feeling?</h1>
                {moods.map((mood) =>
                    <MoodButton mood={mood} key={mood.mood_id} handleButton={this.props.handleButton} />
                )}
                <button disabled={!mood} onClick={() => this.props.setPage('activity')}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        moods: state.moods.moods,
        error: state.moods.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoods: () => dispatch(getMoods())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodForm)