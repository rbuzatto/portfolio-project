import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

class Header extends Component {

    render() {
        const { menuOpen } = this.props

        return (
        <header className="header">
        <CSSTransitionGroup
          transitionName="nav-animation"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
            {
                menuOpen && (
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
                <div className="header__menu"></div>
            </div>
        </header>
        )
    }
}

Header.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    displayMenu: PropTypes.func.isRequired,
}

export default Header