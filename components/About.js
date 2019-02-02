import PropTypes from 'prop-types'

import Intro from './Intro'
import { renderParagraphs } from '../utils/utils'

const About = ({text}) => {
    const { intro, paragraphs } = text
    return (
        <section className="about">
            <Intro {...intro} hue='96' />
            <div>
                { renderParagraphs(paragraphs, 'about__text') }
            </div>
        </section>
    )   

}

About.propTypes = {
    text: PropTypes.object.isRequired
}

export default About