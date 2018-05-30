import React, { Component } from 'react'

class MonthInMoods extends Component {
    render() {
        const { year, entries } = this.props 

        // Count up all the moods felt in that year and month 
        const countAllMoods = (year, month) => {
            let monthMoods = {}
            const targetStart = new Date(`${year}-${(month - 1).toString()}`)
            const targetEnd = new Date(`${year}-${month}`)
            entries.map(entry => {
                const compare = new Date(entry.entry_date)
                if (compare > targetStart && compare <= targetEnd) {
                    if (!monthMoods[entry.mood_name]) {
                        monthMoods[entry.mood_name] = 1
                    } else {
                        monthMoods[entry.mood_name]++
                    }
                }
            })
            return monthMoods
        }

        return (
            <div>
                <h3>Breaking down MONTH in moods</h3>
                <p>Moods in colors in a gradient for current month</p>
            </div>
        )
    }
}


export default MonthInMoods