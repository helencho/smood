import React, { Component } from 'react'
import '../../stylesheets/dashboard.css'

class CustomTooltip extends Component {
    render() {
        const { active } = this.props
        if (active) {
            const { payload, label, data } = this.props

            // Find the mood name of the current bar 
            let moodLabel
            data.forEach(entry => {
                if (entry.name === label) {
                    moodLabel = entry.mood
                    return
                }
            })

            // Return the mood and count 
            return (
                <div className="custom-tooltip">
                    {moodLabel ?
                        <p className="label">{`${moodLabel}: ${payload[0].value}`}</p>
                        :
                        <p className="label">No feelings here</p>
                    }
                </div>
            );
        }

        // If not active, return null 
        return null;
    }
}

export default CustomTooltip