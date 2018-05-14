import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

class MoodsByYear extends Component {
    constructor() {
        super()
        this.state = {
            year: '2018',
            moods: {}
        }
    }

    componentDidMount() {
        this.countMoods()
    }

    componentWillReceiveProps() {
        // Set the year 
    }

    countMoods = () => {
        const { year } = this.state 
        // Filter entries in the year 
        // Count number of occurences of moods in filtered entries  
        // Mount to state 
    }

    render() {
        // Allow user to click on a year 
        // By default, year will be 2018 (for now) 

        return (
            <div>
                <h3>Your Moods by Year (by year, based on year clicked)</h3>
                <p><a href="https://jsfiddle.net/alidingling/6ebcxbx4/" target="_blank">Simple radar chart</a></p>
            </div>
        )
    }
}

// Get all entries 
const mapStateToProps = (state) => {
    return {
        entries: state.entries.entries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEntries: () => dispatch(getEntries())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodsByYear)