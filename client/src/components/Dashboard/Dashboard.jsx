import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import MoodsByYear from './MoodsByYear'
import ActivitiesByMood from './ActivitiesByMood'
import MoodPerMonth from './MoodPerMonth'
import PopularActivities from './PopularActivities'
import MonthInMoods from './MonthInMoods'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            year: '2019',
            entries: []
        }
    }

    componentDidMount() {
        this.props.getEntries()
    }

    componentWillReceiveProps() {
        this.setState({
            entries: this.props.entries 
        })
    }

    render() {
        const { year, entries } = this.state

        return (
            <div>
                <h1>Dashboard for year {year - 1}</h1>

                <MoodsByYear entries={entries} year={year} />

                <ActivitiesByMood />

                <MoodPerMonth />

                <PopularActivities />

                <MonthInMoods />

            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)