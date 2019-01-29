import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LanguageToggle extends Component {

    state = {
        language: 'en'
    }

    handleOnChange = (e) => {
        e.persist()
        
        this.setState(() => ({ language: e.target.value }), () => this.props.toggleLanguage(e))
    }

    componentDidMount() {
        const language = localStorage.getItem('lg')
        if(language) {
            this.setState(() => ({ language }))
        }
    }

    
    componentDidUpdate() {
        if(typeof window === 'undefined') { return }
        
        localStorage.setItem('lg', this.state.language)
    }

    render() {

        return (
            <div className={`language ${this.props.customClass}`}>
                <input type="radio" value="en" name="lg" className="language__radio" onChange={this.handleOnChange} id="en" checked={ this.state.language === 'en' } />
                <label className="language__option" htmlFor="en">EN</label>
                <input type="radio" value="pt" name="lg" className="language__radio" onChange={this.handleOnChange} id="pt" checked={ this.state.language === 'pt' } />
                <label className="language__option" htmlFor="pt">PT</label>
                <div className="language__box">
                    <div className="language__disk"></div>
                </div>
        </div>
        )
    }
}

LanguageToggle.propTypes = {
    customClass:  PropTypes.string,
    toggleLanguage: PropTypes.func.required
}

export default LanguageToggle