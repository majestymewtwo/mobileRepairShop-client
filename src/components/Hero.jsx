
function Hero(props){
    return (
        <div className="px-4 py-5 bg-dark text-white">
            <div className="container">
                <h1 className="fw-bold text-warning">Welcome to Mobile Repair Service</h1>
                <h1 className="text-warning">{props.userEmail}</h1>
                <br />
                <h5 className="fst-italic">An online platform providing various kinds of repair services for your mobile phone. We have over 5000 happy customers who put their trust in us.</h5>
                <h5 className="fst-italic">"Customer Satisfaction and 100% Qaulity-assured Service is what matters the most."</h5>
                <br />
                <h3 className="fw-bold text-warning">Our Services</h3>
                <ul>
                    <li className="fw-semibold fs-5">48-72 Hour Repair</li>
                    <li className="fw-semibold fs-5">Instant Price Quotation</li>
                    <li className="fw-semibold fs-5">Door Pickup & Delivery</li>
                    <li className="fw-semibold fs-5">50+ Service Centers</li>
                    <li className="fw-semibold fs-5">Over 20+ Phone Brands Supported</li>
                </ul>
            </div>
        </div>
    )
}
export default Hero;