import PropTypes from 'prop-types'

import Intro from './Intro'
import { renderParagraphs } from '../utils/utils'

const About = ({text, isIntroOpen}) => {
    const { intro, paragraphs } = text
    return (
        <section className="about">
            <Intro {...intro} open={isIntroOpen} hue='96' />
            <div>
                { renderParagraphs(paragraphs, 'about__text') }
            </div>
        </section>
    )   

}

About.propTypes = {
    text: PropTypes.object.isRequired,
    isIntroOpen: PropTypes.bool
}

About.defaultProps = {
    isIntroOpen: false
}

export default About