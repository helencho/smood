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


    render() {
        const { year } = this.state

        return (
            <div>
                <h1>Dashboard for year {year - 1}</h1>

                <MoodsByYear entries={this.props.entries} year={year} />

                <ActivitiesByMood />

                <MoodPerMonth entries={this.props.entries} year={year} />

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