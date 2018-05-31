import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

class SplashTitle extends Component {
    render() {
        return (
            <div className="splash-title" data-aos="fade-up">
                <Link to="/"><h1>mood</h1></Link>
                <p>Feeling some type of way?</p>
            </div>
        )
    }
}

export default SplashTitle