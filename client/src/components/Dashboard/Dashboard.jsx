import React, { Component } from 'react'
import Legend from './Legend'
import Monthly from './Monthly'
import Yearly from './Yearly'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <h3>Your Moods by Year (by year, based on year clicked)</h3>
                <p><a href="https://jsfiddle.net/alidingling/6ebcxbx4/" target="_blank">Simple radar chart</a></p>

                <h3>Mood in Activities (every activity logged per mood, based on mood clicked)</h3>
                <p><a href="https://jsfiddle.net/alidingling/9km41z5z/" target="_blank">Simple Radial Bar Chart</a></p>
                
                <h3>A Year in Moods (most popular mood per month for 12 months)</h3>
                <p><a href="https://jsfiddle.net/alidingling/30763kr7/" target="_blank">Simple Bar Chart</a></p>

                <h3>Activities by popularity (top 7 activities by year, based on year clicked)</h3>
                <p><a href="https://jsfiddle.net/alidingling/30763kr7/" target="_blank">Simple Bar Chart</a></p>
                
            </div>
        )
    }
}

export default Dashboard