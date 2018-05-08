import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMoods } from '../../actions/mood_actions'
import MoodButton from './MoodButton'

class MoodForm extends Component {
    componentDidMount() {
        this.props.getMoods()
    }

    render() {
        const { moods } = this.props

        return (
            <div>
                <h1>MoodForm Page</h1>
                {moods.map((mood) =>
                    <MoodButton mood={mood} key={mood.mood_id} handleButton={this.props.handleButton} />
                )}
                <button>Next</button>
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