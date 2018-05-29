import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

class MoodsByYear extends Component {
    constructor() {
        super()
        this.state = {
            year: '2019',
            moods: {},
            entries: []
        }
    }

    componentDidMount() {
        this.props.getEntries()
        // this.countMoods()
    }

    componentWillReceiveProps() {
        // Set the year after user chooses year 
    }

    componentWillUpdate() {
        // this.countMoods()
    }

    countMoods = () => {
        // console.log('in counting moods')
        const { year, moods } = this.state

        const target = new Date(year)
        const targetEntries = this.props.entries.filter(entry => {
            const compare = new Date(entry.entry_date)
            return compare <= target
        })
        console.log(targetEntries)

        // Filter entries in the year 
        // Count number of occurences of moods in filtered entries  
        // Mount to state 
    }

    render() {
        const { year, moods, entries } = this.state

        // Get all the entries in the target year 
        const target = new Date(year)
        const targetEntries = this.props.entries.filter(entry => {
            const compare = new Date(entry.entry_date)
            return compare <= target
        })
        console.log(targetEntries)

        // Count all the moods felt in the year 
        let moodTable = {}
        targetEntries.forEach(entry => {
            if (!moodTable[entry.mood_name]) {
                moodTable[entry.mood_name] = 1
            } else {
                moodTable[entry.mood_name]++
            }
        })

        console.log(moodTable)

        // Put counted moods in a table 
        let moodData = []
        for (let mood in moodTable) {
            moodData = [...moodData, { subject: mood, A: moodTable[mood] }]
        }

        console.log(moodData)

        return (
            <div>
                <h3>Your Moods by Year</h3>
                <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={moodData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="TestUser" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
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