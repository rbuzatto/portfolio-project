const title = 'Rafael'
const titleArr = title.split('')

const Landing = () => (
    <section className="landing">
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
                <h2 className="landing__subTitle">Full Stack Developer</h2>
            </div>
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

export default Landing