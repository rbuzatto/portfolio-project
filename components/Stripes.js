const Stripes = () => {
    const config = {
        'line--1': '0,200 150,200 200,90 300,90',
        'line--2': '100,-10 170,180 300,180',
        'line--3': '300,200 180,200 215,120 300,120'
    }

    return (
    <svg width="100%" height="100%" className="stripes" 
        viewBox="0 0 300 300"
        preserveAspectRatio="none"
        >
        { Object.entries(config).map( ([key, value]) => (
            <polyline points={value}
                id={key}
                key={key}
                className="stroke__line"
                />
            ))
        }
    </svg>
    )
}

export default Stripes