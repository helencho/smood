import React, { Component } from 'react'
import AOS from 'aos'

class ActivityButton extends Component {
    componentDidMount() {
        AOS.init({
            once: true
        })
    }

    componentWillReceiveProps() {
        AOS.refresh()
    }

    render() {
        const { act, activity, handleButton, index } = this.props
        const activeActivity = activity && act.activity_id === activity ? `active` : null 

        const delay = index * 50

        return (
            <button onClick={() => handleButton('activity', act.activity_id)} className={`activity-button activity-button-${activeActivity}`}>
                <p className={`emoji`} data-aos="fade-up" data-aos-delay={delay} data-aos-offset="0">{act.img}</p>
                <p data-aos="fade" data-aos-delay={delay + 100} data-aos-offset="0">{act.activity_name}</p>
            </button>
        )
    }
}

export default ActivityButton