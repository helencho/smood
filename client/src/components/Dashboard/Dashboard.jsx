import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import { getMoods } from '../../actions/mood_actions'
import MoodsByYear from './MoodsByYear'
import ActivitiesByMood from './ActivitiesByMood'
import MoodPerMonth from './MoodPerMonth'
import PopularActivities from './PopularActivities'
import MonthInMoods from './MonthInMoods'
import '../../stylesheets/dashboard.css'

// Smart 
class Dashboard extends Component {
    constructor() {
        super()
        this.years = [2018, 2019, 2020, 2021]
        this.state = {
            year: '2019',
            moods: [],
            selectedMood: 'happy'
        }
    }

    componentDidMount() {
        this.props.getEntries()
        this.props.getMoods()
    }

    handleSelectChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { year, selectedMood } = this.state

        return (
            <div className="dashboard-container">
                <div className="title">
                    <h1>Dashboard for</h1>
                    <select value={year} name='year' onChange={this.handleSelectChange}>
                        {this.years.map((year, index) => {
                            return (
                                <option key={index} value={year}>{year - 1}</option>
                            )
                        })}
                    </select>
                </div>

                <MoodsByYear entries={this.props.entries} year={year} />
                <MonthInMoods entries={this.props.entries} year={year} />
                <MoodPerMonth entries={this.props.entries} year={year} />
                <ActivitiesByMood entries={this.props.entries} year={year} selectedMood={selectedMood} moods={this.props.moods} handleSelectChange={this.handleSelectChange} />
                <PopularActivities />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries.entries,
        moods: state.moods.moods
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEntries: () => dispatch(getEntries()),
        getMoods: () => dispatch(getMoods())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)