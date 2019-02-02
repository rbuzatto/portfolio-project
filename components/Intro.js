import PropTypes from 'prop-types'

const Intro = (props) => (
    <div className={`intro ${props.open ? 'intro--open' : ''}`}>
            <div className={`intro__wrapper ${props.reverse? 'intro__wrapper--reverse' : ''}`}>
                <div className="intro__title intro__title--left">
                    <span 
                        className="intro__title-bg-layout" 
                        style={{background: `hsl(${props.hue}, 100%, 88%)`}}
                    >{props.firstText}</span>
                </div>
                <div className="intro__line"></div>
                <div className="intro__title intro__title--right">{props.secondText}</div>
            </div>
    </div>
)

Intro.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    open: PropTypes.bool,
    hue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

Intro.defaultProps = {
    reverse: false,
    open: false,
    hue: 0
}

export default Intro