import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const slogans = [
    `All the Feels`,
    `Feeling some type of way?`
]

class SplashTitle extends Component {

    // Grab random element from array 
    randomOne = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    }
    
    render() {
        const slogan = this.randomOne(slogans)

        return (
            <div className="splash-title" data-aos="fade-up">
                <Link to="/"><h1>smood</h1></Link>
                <p>{slogan}</p>
            </div>
        )
    }
}

export default SplashTitle