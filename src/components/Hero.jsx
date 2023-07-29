import "./Main.css";
function Hero(props){
    return (
        <div className="hero-section bg-dark text-white">
            <div className="hero-container opacity-100 px-4">
                <h1 className="fw-bold text-warning">Welcome to Mobile Repair Service</h1>
                <h1 className="text-warning">{props.userEmail}</h1>
                <br />
                <h5 className="fst-italic">An online platform providing various kinds of repair services for your mobile phone. We have over 5000 happy customers who put their trust in us.</h5>
                <h5 className="fst-italic">"Customer Satisfaction and 100% Quality-assured Service is what matters the most."</h5>
            </div>
        </div>
    )
}
export default Hero;