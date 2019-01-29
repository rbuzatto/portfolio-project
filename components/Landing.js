import PropTypes from 'prop-types'

const title = 'Rafael'
const titleArr = title.split('')

import LanguageToggle from './LanguageToggle'

const Landing = (props) => (
    <section className="landing">
        <LanguageToggle customClass="landing__toggle-lg" toggleLanguage={props.toggleLanguage} />
        <div className="landing__title-area">
            <div className="landing__title">
                {
                    titleArr.map((letter, idx) => (
                        <div className="animate-letters" key={idx}>
                            <h1 className="front-face">{letter}</h1>
                            <h1 className="back-face">{letter}</h1>
                        </div>
                        )
                    )
                }
            </div>
                <h2 className="landing__subTitle">Full Stack Developer</h2>
        </div>
        
        <div className="landing__cta btn">
                <div className="btn__slash">
                    <div className="btn btn--phantom">
                        <span className="btn__text btn__text--hidden">Contact</span>
                    </div>
                </div>
                <span className="btn__text">Contact</span>
            </div>
    </section>
)

Landing.propTypes = {
    toggleLanguage: PropTypes.func.required
}

export default Landing