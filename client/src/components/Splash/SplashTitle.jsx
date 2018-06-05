import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const slogans = [
    `All the Feels`,
    `Feeling some type of way?`
]

class SplashTitle extends Component {
    constructor() {
        super()
        this.state = {
            slogan: ''
        }
    }

    componentDidMount() {
        this.getSlogan()
    }

    // Grab random element from array 
    getSlogan = () => {
        let slogan = slogans[Math.floor(Math.random() * slogans.length)]
        this.setState({
            slogan
        })
    }

    render() {
        const { slogan } = this.state

        return (
            <div className="splash-title" data-aos="fade-up">
                <Link to="/"><h1>smood</h1></Link>
                <p>{slogan}</p>
            </div>
        )
    }
}

export default SplashTitle