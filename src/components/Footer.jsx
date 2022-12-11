function Footer(){
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container text-left">
              <div className="row text-left">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4 font-weight-bold text-warning">MOBILE REPAIR SERVICE</h5>
                  <p>SMARTPHONE / TABLET REPAIRING SERVICES Repair in 48-72 Hours | 90 Days Warranty | 5000+ Happy Clients 
                    Few Clicks To A Hassle-Free Repair Service</p> 
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Support</h5>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>Privacy policy</a></p>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>Warrenty policy</a></p>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>FAQ</a></p>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>Terms and conditions</a></p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick links</h5>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>About us</a></p>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>Blog</a></p>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>Mobile repair services</a></p>
                  <p><a href="#" className="text-white" style={{textDecoration: "none"}}>Contact us</a></p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacts</h5>
                  <p><i className="fas fa-home"></i> Chennai</p>
                  <p><i className="fas fa-envelope"></i> test@gmail.com</p>
                  <p><i className="fas fa-phone"></i> 1234567890</p>
                  <p><i className="fas fa-print"></i> +01565684787</p>
               </div>
              </div>
              <hr className="mb-4"/>
              <div className="row align-items-center">
                <div className="col-md-7 col-lg-8">
                  <p>Copyright ©2022 all rights reserved by:
                    <a href="#" style={{textDecoration: "none"}}>
                    <strong className="text-warning"> Students of M.Tech CSE </strong>
                    </a>
                  </p>
                </div>
                <div className="col-md-5 col-lg-4">
                  <div className="text-center text-md-right">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-facebook text-warning mx-2"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-twitter text-warning mx-2"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-google-plus text-warning mx-2"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-linkedin text-warning mx-2"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn-floating btn-sm text-white" style={{fontSize: "23px"}}><i className="fab fa-youtube text-warning mx-2"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
               </div>  
              </div>
          </footer>
    )
}

export default Footer;