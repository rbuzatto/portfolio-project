import PropTypes from 'prop-types'

const Intro = (props) => (
    <div className="intro">
            <div className="intro__wrapper">
                <div className="intro__title intro__title--left"><span className="intro__title-bg-layout">{props.firstText}</span></div>
                <div className="intro__line"></div>
                <div className="intro__title intro__title--right">{props.secondText}</div>
            </div>
    </div>
)

Intro.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.string.isRequired,
}

export default Intro