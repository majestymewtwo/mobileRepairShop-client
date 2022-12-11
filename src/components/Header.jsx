
function Header(props){
    return(
      <nav className="navbar navbar-expand-lg bg-dark py-4 navbar-dark">
        <div className="container">
          <a className="navbar-brand text-warning fw-semibold" href="#">Mobile Repair Service</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${props.home} mx-3  fw-bold`} href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.blog} mx-3  fw-bold`} href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.profile} mx-3  fw-bold`} href="/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.book} mx-3  fw-bold`} href="/book">Book</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.contact} mx-3  fw-bold`} href="/contact">Contact us</a>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-outline-warning mx-3"><a href="/" style={{textDecoration:"none",color:"white"}}>Log Out</a></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
}

export default Header;