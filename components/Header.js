import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class Header extends Component {
    state = {
        menuOpen: false
    }

    render() {
        const { menuOpen } = this.state

        return (
        <header className="header">
        <CSSTransitionGroup
          transitionName="nav-animation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {
                menuOpen && (
                <nav className="header__nav">
                    <a className = "header__link"   href="">Home</a>
                    <a className = "header__link"   href="">About</a>
                    <a className = "header__link"   href="">Skills</a>
                    <a className = "header__link"   href="">Contact</a>
                </nav>
                )
            }
        </CSSTransitionGroup>
        
            
            <div className="header__menu-box" onClick={() => this.setState(({ menuOpen }) => ({ menuOpen : !menuOpen }))}>
                <div className="header__menu"></div>
            </div>
        </header>
        )
    }
    
}

export default Header