import PropTypes from 'prop-types'

import Intro from './Intro'
import { renderParagraphs } from '../utils/utils'

import { frontend, backend } from '../icons/paths'

const Skills = ({text, isIntroOpen}) => {
    const { intro, paragraphs } = text

    return (
        <section className="skills">
            <Intro {...intro} reverse={true} open={isIntroOpen} hue='210' />
            <div>
                <h2 className="skills__title">What Do I Know?</h2>
                { renderParagraphs(paragraphs, 'skills__text') }
                
                    <div className="area">
                        <input type="radio" name="area" id="frontend" value="frontend" className="area__option" defaultChecked />
                        <input type="radio" name="area" id="backend" value="backend" className="area__option" />
                        <div className="area__labels">
                            <label className="area__expertise" htmlFor="frontend">frontend</label>
                            <label className="area__expertise" htmlFor="backend">backend</label>
                        </div>
                
                        <div className="cards cards--frontend">
                            { frontend.map((path, idx) => (
                                <div key={idx} className="card">
                                    <div className="zoomed"></div>
                                    { path }
                                </div>
                            )) }
                        </div>
                        
                        <div className="cards cards--backend">
                            { backend.map((path, idx) => (
                                <div key={idx} className="card">
                                    <div className="zoomed"></div>
                                    { path }
                                </div>
                            )) 
                            }
                        </div>
                    </div>
            </div>

        </section>
    )
}
Skills.propTypes = {
    text: PropTypes.object.isRequired,
    isIntroOpen: PropTypes.bool
}

Skills.defaultProps = {
    isIntroOpen: false
}

export default Skills