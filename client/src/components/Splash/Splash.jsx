import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../actions/session_actions'
import SplashTitle from './SplashTitle'
import AOS from 'aos'
import '../../stylesheets/splash.css'

class Splash extends Component {
    componentDidMount() {
        this.props.getUser()
        AOS.init()
    }

    componentWillReceiveProps() {
        AOS.refresh()
    }

    render() {
        // If user is logged in to session, redirect to home
        if (this.props.currentUser) {
            return <Redirect to="/" />
        }

        return (
            <div className="splash-container">
                <SplashTitle />
                <div className="auth-choices">
                    <Link to="/login" data-aos="fade-up" data-aos-delay="100"><button id="button-login">Log in</button></Link>
                    <Link to="/signup" data-aos="fade-up" data-aos-delay="200"><button id="button-register">Register</button></Link>
                </div>
                <div id="git" data-aos="fade-up" data-aos-delay="350" data-aos-offset="0">
                    {/* https://github.com/asciidoctor/asciidoctor/issues/2071 */}
                    <a href="https://github.com/helencho/mood" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-fw fa-5x"></i></a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
