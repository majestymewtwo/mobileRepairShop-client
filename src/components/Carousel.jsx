function Carousel(){
    return (
        <div className="px-4 py-5 bg-dark text-white">
            <div className="container">
                <h3 className="text-warning">Our Customer Reviews</h3>
                <div id="carouselExampleControls" class="carousel slide text-center my-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                          <h3 style={{width:"50%",margin:"2% auto"}}>"This online mobile repair shop has really made it easy for me to get my phone fixed."</h3>
                          <h6 className="text-warning">Kamalesh, Durgapur</h6>
                        </div>
                        <div class="carousel-item">
                          <h3 style={{width:"50%",margin:"2% auto"}}>"Online mobile repair shop really puts their full effort in making sure we get a satisfied proper repair."</h3>
                          <h6 className="text-warning">Muthu, Chennai</h6>
                        </div>
                        <div class="carousel-item">
                          <h3 style={{width:"50%",margin:"2% auto"}}>"They do door pickups and door deliveries after the repair is done, which is very much helpful and handy. This saves a lot of burden on us."</h3>
                          <h6 className="text-warning">Gautam, Kerala</h6>
                        </div>
                    </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                </div>
            </div>
        </div>
    )
}
export default Carousel;