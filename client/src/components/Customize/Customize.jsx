import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMoods } from '../../actions/mood_actions'
import '../../stylesheets/customize.css'

class Customize extends Component {
    componentDidMount() {
        this.props.getMoods()
    }

    render() {
        // Render user's current moods 
        // Render user's current activities 
        // Add button at the end 
        // Click add button => render emojis 
        console.log(this.props.moods)

        return (
            <div className="customize-container">
                <h1>Customize</h1>
                <p>Keep it relevant</p>
                <Link to="/custom/mood"><button>Moods</button></Link>
                <Link to="/custom/activity"><button>Activities</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        moods: state.moods.moods 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoods: () => dispatch(getMoods())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Customize)