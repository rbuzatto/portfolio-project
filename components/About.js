import PropTypes from 'prop-types'

import Intro from './Intro'

const About = ({text}) => {
    const { intro } = text
    return (
        <section className="about">
            <Intro {...intro} hue='96' />
            <div>
                <p className="about__text">{text.p1}</p>
                <p className="about__text">{text.p2}</p>
                <p className="about__text">{text.p3}</p>
            </div>
        </section>
    )   

}

About.propTypes = {
    text: PropTypes.object.isRequired
}

export default About