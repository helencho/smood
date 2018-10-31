import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import { getMoods } from '../../actions/mood_actions'
import { toggleClose, setYearIndex } from '../../actions/dropdown_actions'
import MoodsByYear from './MoodsByYear'
import ActivitiesByMood from './ActivitiesByMood'
import MoodPerMonth from './MoodPerMonth'
import MonthInMoods from './MonthInMoods'
import Dropdown from '../Dropdown/Dropdown'
import '../../stylesheets/dashboard.css'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      years: ['2017', '2018']
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

  handleClose = (e) => {
    if (e.target.id !== 'dropdown') {
      this.props.toggleClose()
    }
  }

  render() {
    const { activeYearIndex } = this.props

    const activeYear = this.state.years[activeYearIndex]

    return (
      <div
        className="dashboard-container"
        onClick={this.handleClose}
      >
        <div className="title-container">
          <h1>Dashboard for</h1>
          <Dropdown
            handleClick={this.props.setYearIndex}
            index={activeYearIndex}
            items={this.state.years}
          />
        </div>
        <MoodsByYear
          entries={this.props.entries}
          year={activeYear}
        />
        <MonthInMoods
          entries={this.props.entries}
          year={activeYear}
        />
        <MoodPerMonth
          entries={this.props.entries}
          year={activeYear}
        />
        <ActivitiesByMood
          entries={this.props.entries}
          year={activeYear}
          moods={this.props.moods}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    entries: state.entries.entries,
    moods: state.moods.moods,
    activeYearIndex: state.dropdown.activeYearIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEntries: () => dispatch(getEntries()),
    getMoods: () => dispatch(getMoods()),
    setYearIndex: (id) => dispatch(setYearIndex(id)),
    toggleClose: () => dispatch(toggleClose())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
