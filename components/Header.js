import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

class Header extends Component {

    render() {
        const { isMenuOpen } = this.props

        return (
        <header className="header">
        <CSSTransitionGroup
          transitionName="nav-animation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {
                isMenuOpen && (
                <div className="header__nav-box">
                    <nav className="header__nav">
                        <a className = "header__link"   href="">Home</a>
                        <a className = "header__link"   href="">About</a>
                        <a className = "header__link"   href="">Skills</a>
                        <a className = "header__link"   href="">Contact</a>
                    </nav>
                </div>
                )
            }
        </CSSTransitionGroup>
        
            
            <div className="header__menu-box" onClick={this.props.displayMenu}>
                <div className={`header__menu ${ isMenuOpen ? 'header__menu--open' : ''}`}></div>
            </div>
        </header>
        )
    }
}

Header.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    displayMenu: PropTypes.func.isRequired,
}

export default Header