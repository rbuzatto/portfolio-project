const inlineStyleDefault = {
    width: '40px',
    height:' 40px',
}

const inlineStyle50px = {
    width: '50px',
    height:' 50px',
}

import { frontend, backend } from '../icons/paths'

const Skills = () => (
    <section className="skills">
        <h2 className="skills__title">What Do I Know?</h2>
        <p className="skills__text">I have some knowledge about some stuff. These stuff are fun.</p>

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

    </section>
)

export default Skills