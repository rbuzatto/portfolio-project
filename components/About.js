import PropTypes from 'prop-types'

import Intro from './Intro'

const About = ({text}) => (
    <section className="about">
        <Intro firstText={text.txt1} secondText={text.txt2} hue='96' />
        <div>
            <p className="about__text">{text.p1}</p>
            <p className="about__text">{text.p2}</p>
            <p className="about__text">{text.p3}</p>
         </div>
    </section>
)

About.propTypes = {
    text: PropTypes.object.required
}

export default About