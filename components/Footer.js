import PropTypes from 'prop-types'
import { contactSvgs } from '../icons/paths'

const Footer = props => {
    const translateClass = props.isMenuOpen ? 'footer-animate' : ''
    return (
    <footer className={`footer ${translateClass}`}>
        <div className="footer__something">
            <div className="footer__content-box">
                <div className="footer__curtains footer__curtains--left">&#60;</div>
                <div className="footer__welcome">Find me</div>
                <div className="footer__contact-wrapper">
                    <div className="footer__contact">
                        { contactSvgs.map((path, idx) => {
                            return(<div key={idx} className="footer__icon">
                                { path }
                            </div>
                            )
                            }      
                        ) 
                        }
                    </div>
                </div>
                <div className="footer__curtains footer__curtains--right">&#47;&#62;</div>
            </div>    
        </div>
    </footer>
    )
}

Footer.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
}

export default Footer