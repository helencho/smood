import React, { Component } from 'react'
import AOS from 'aos'

class MoodButton extends Component {
    componentDidMount() {
        AOS.init({
            once: true
        })
    }

    componentWillReceiveProps() {
        AOS.refresh()
    }

    render() {
        const { md, handleButton, mood, index } = this.props
        const activeMood = mood && md.mood_id === mood ? `active` : null
        
        const delay = index * 100 

        return (
            <button onClick={() => handleButton('mood', md.mood_id)} className={`mood-button mood-button-${activeMood}`}>
                <p className="emoji" data-aos="fade-up" data-aos-delay={delay} data-aos-offset="0">{md.img}</p>
            </button>
        )
    }
}

export default MoodButton