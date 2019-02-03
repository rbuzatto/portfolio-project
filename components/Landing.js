import PropTypes from 'prop-types'

import Stripes from './Stripes'


import LanguageToggle from './LanguageToggle'

const Landing = ({toggleLanguage, text}) => {

    const renderName = (name) => (
        name.split('').map((letter, idx) => (
            <div className="animate-letters" key={idx}>
                <h1 className="front-face">{letter}</h1>
                <h1 className="back-face">{letter}</h1>
            </div>
            )
        ))

    return (
        <section className="landing">
            <LanguageToggle customClass="landing__toggle-lg" toggleLanguage={toggleLanguage} />
            <Stripes />
            <div className="landing__title-area">
                <div className="landing__title">
                    {
                        renderName(text.name)
                    }
                </div>
                <h2 className="landing__subTitle">{text.subtitle}</h2>
            </div>
            
            <button className="landing__cta btn">
                <div className="btn__slash">
                    <div className="btn btn--phantom">
                            <span className="btn__text btn__text--hidden">{text.cta}</span>
                    </div>
                </div>
                <span className="btn__text">{text.cta}</span>
            </button>
        </section>
    )
}

Landing.propTypes = {
    toggleLanguage: PropTypes.func.isRequired,
    text: PropTypes.object.isRequired
}

export default Landing