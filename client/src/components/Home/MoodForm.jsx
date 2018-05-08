import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMoods } from '../../actions/mood_actions'
import MoodButton from './MoodButton'

class MoodForm extends Component {
    constructor() {
        super()
        this.state = {
            moods: ['happy', 'calm', 'meh', 'upset', 'sad']
        }
    }
    
    componentDidMount() {
        this.props.getMoods()
    }

    render() {
        const { moods } = this.state
        console.log(this.props)

        return (
            <div>
                <h1>MoodForm Page</h1>
                {moods.map((mood, idx) =>
                    <MoodButton mood={mood} key={idx} />
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