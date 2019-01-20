const title = 'Rafael'
const titleArr = title.split('')

const Main = () => (
    <section className="landing">
        <h1>landing Page here</h1>
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
    </section>
)

export default Main