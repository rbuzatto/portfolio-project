import PropTypes from 'prop-types'
import { contactSvgs } from '../icons/contactSvgs'

const Footer =({isMenuOpen, text}) => {
    const translateClass = isMenuOpen ? 'footer-animate' : ''
    return (
    <footer className={`footer ${translateClass}`}>
        <div className="footer__content-box">
            <div className="footer__content">
                <div className="footer__curtains footer__curtains--left">&#60;</div>
                <div className="footer__welcome">{text.txt}</div>
                <div className="footer__contact">
                        { contactSvgs.map((svg, idx) => {
                            return(
                                <a key={idx} className="footer__icon" href={svg.target}>
                                    { svg.path }
                                </a>
                                )
                            })
                        }
                </div>
                <div className="footer__curtains footer__curtains--right">&#47;&#62;</div>
            </div>    
        </div>
    </footer>
    )
}

Footer.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    text: PropTypes.object.isRequired
}

export default Footer