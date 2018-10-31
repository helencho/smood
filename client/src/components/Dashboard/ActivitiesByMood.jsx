import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts'
import Dropdown from '../Dropdown/Dropdown'
import { toggleClose, setMoodIndex } from '../../actions/dropdown_actions'

class ActivitiesByMood extends Component {
  render() {
    const { moods, year, entries } = this.props

    const moodsArray = moods.map(mood => mood.mood_name)
    const selectedMood = moodsArray[this.props.activeMoodIndex]

    // Get all the entries in the target year and filter by selected mood 
    const lowTarget = new Date((year).toString())
    const target = new Date((parseInt(year) + 1).toString())
    const filteredEntries = entries.filter(entry => {
      const compare = new Date(entry.entry_date)
      return compare > lowTarget && compare <= target
    }).filter(entry => {
      return entry.mood_name === selectedMood
    })

    // Count activities in an object 
    const activityTable = {}
    filteredEntries.forEach(entry => {
      if (!activityTable[entry.activity_name]) {
        activityTable[entry.activity_name] = 1
      } else {
        activityTable[entry.activity_name]++
      }
    })

    // Fill counted activities in a data table / array 
    let data = []
    const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658']
    let i = 0
    for (let act in activityTable) {
      data = [...data, { name: act, count: activityTable[act], fill: colors[i] }]
      i++
    }

    // Bar chart styles 
    const style = {
      top: '-100%',
      left: '4%',
      position: 'relative'
    }

    return (
      <div className="activities-by-mood-container">
        <div className="title">
          <h3>Things you did when you were</h3>
          <Dropdown
            handleClick={this.props.setMoodIndex}
            index={this.props.activeMoodIndex}
            items={moodsArray}
            className="small"
          />
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <RadialBarChart cx="50%" cy="50%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#000' }} background clockWise={true} dataKey='count' />
            <Legend iconSize={10} width={150} height={150} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeMoodIndex: state.dropdown.activeMoodIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMoodIndex: (id) => dispatch(setMoodIndex(id)),
    toggleClose: () => dispatch(toggleClose())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesByMood)
