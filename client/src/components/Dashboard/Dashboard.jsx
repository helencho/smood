import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import { getMoods } from '../../actions/mood_actions'
import MoodsByYear from './MoodsByYear'
import ActivitiesByMood from './ActivitiesByMood'
import MoodPerMonth from './MoodPerMonth'
import MonthInMoods from './MonthInMoods'
import Dropdown from '../Dropdown/Dropdown'
import '../../stylesheets/dashboard.css'

// Smart 
class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      selectedMood: 'happy',
      dropdown: {
        activeIndex: 1,
        isOpen: false,
        items: ['2017', '2018']
      }
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

  handleClick = (e) => {
    const { activeIndex, isOpen } = this.state.dropdown
    const id = e.target.id ? e.target.id : activeIndex
    this.setState({
      dropdown: {
        ...this.state.dropdown,
        activeIndex: id,
        isOpen: !isOpen
      }
    })
  }

  render() {
    const { selectedMood } = this.state
    const { items, activeIndex } = this.state.dropdown
    const activeYear = items[activeIndex]

    return (
      <div className="dashboard-container">
        <div className="title-container">
          <h1>Dashboard for</h1>
          <Dropdown
            activeIndex={this.state.dropdown.activeIndex}
            isOpen={this.state.dropdown.isOpen}
            items={this.state.dropdown.items}
            handleClick={this.handleClick}
          />
        </div>
        <MoodsByYear entries={this.props.entries} year={activeYear} />
        <MonthInMoods entries={this.props.entries} year={activeYear} />
        <MoodPerMonth entries={this.props.entries} year={activeYear} />
        <ActivitiesByMood
          entries={this.props.entries}
          year={activeYear}
          selectedMood={selectedMood}
          moods={this.props.moods}
          handleSelectChange={this.handleSelectChange} />
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
