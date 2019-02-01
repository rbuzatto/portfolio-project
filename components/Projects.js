import PropTypes from 'prop-types'

import Intro from './Intro'

const Projects = ({text}) => {
    const { intro, cases } = text
    
    return (
        <section className="projects">
            <Intro {...intro} />
            <ul className="projects__group">
            <li className="projects__case">
                <a  className="projects__link"
                    href="https://www.cantodosaci.com.br/">
                    {cases[0].name}
                </a>
                <p className="projects__case-description">
                    {cases[0].desc}
                </p>
                <a className="projects__img-box" href="https://www.cantodosaci.com.br/" target="_blank" rel="noopener  noreferrer">
                    <img src="../static/img/projects_01.jpg" alt="" className="projects__img" />
                </a>
            </li>
            </ul>
        </section>
    )
}

Projects.propTypes = {
    text: PropTypes.object.isRequired
}


export default Projects