import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import { Link } from 'react-scroll'


const Header = ({ isMenuOpen, displayMenu, text }) => {
    const { links: linkNames } = text

    const links = [
        {
            name: linkNames[0],
            target: 'landing'
        },
        {
            name: linkNames[1],
            target: 'about'
        },
        {
            name: linkNames[2],
            target: 'skills'
        },
        {
            name: linkNames[3],
            target: 'projects'
        },
        {
            name: linkNames[4],
            target: 'footer'
        }
    ]

    const renderLinks = (links) => {
        return links.map((link, idx) => (  
            <Link key={idx} className = "header__link" spy={true} smooth={true}  to={link.target}>{link.name}</Link>
        ))
    }

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
                            {
                                renderLinks(links)
                            }
                        </nav>
                    </div>
                    )
                }
            </CSSTransitionGroup>
        
            
            <div className="header__menu-box" onClick={displayMenu}>
                <div className={`header__menu ${ isMenuOpen ? 'header__menu--open' : ''}`}></div>
            </div>
        </header>
        )
}

Header.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    displayMenu: PropTypes.func.isRequired,
    text: PropTypes.object.isRequired
}

export default Header