const Stripes = () => (
    <svg width="100%" height="100%" className="stripes" 
        viewBox="0 0 300 300"
        preserveAspectRatio="none">
    <polyline points="0,200 150,200 200,90 300,90"
                id="line--1"
                className="stroke__line"
                />
    
    <polyline points="70,-10 170,180 300,180"
                id="line--2"
                className="stroke__line"
                />
    
    <polyline points="300,200 180,200 215,120 300,120"
                id="line--3"
                className="stroke__line"
                />
    
    </svg>
)

export default Stripes