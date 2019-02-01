import PropTypes from 'prop-types'

import Intro from './Intro'

const Projects = ({text}) => (
    <section className="projects">
        <Intro firstText={text.txt1} secondText={text.txt2} />
        <ul className="projects__group">
        <li className="projects__case">
            <a  className="projects__link"
                href="https://www.cantodosaci.com.br/">
                Canto do Saci
            </a>
            <p className="projects__case-description">
                Brazilian Restaurant Website built in VanillaJS. Includes Google API for Geolocation
            </p>
            <a className="projects__img-box" href="https://www.cantodosaci.com.br/" target="_blank" rel="noopener  noreferrer">
                <img src="../static/img/projects_01.jpg" alt="" className="projects__img" />
            </a>
        </li>
        </ul>
    </section>
)

Projects.propTypes = {
    text: PropTypes.object.isRequired
}


export default Projects