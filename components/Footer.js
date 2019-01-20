import PropTypes from 'prop-types'

const Footer = props => {
    const translateClass = props.isMenuOpen ? 'footer-animate' : ''
    return (
    <footer className={`footer ${translateClass}`}>Hi from footer</footer>
    )
}

Footer.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
}

export default Footer