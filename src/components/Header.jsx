import { Link } from "react-router-dom";

function Header(props){
  function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  
    return(
      <nav className="navbar navbar-expand-lg bg-dark py-4 navbar-dark">
        <div className="container">
          <Link className="navbar-brand text-warning fw-semibold" to="/home">Mobile Repair Service</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${props.home} mx-3  fw-bold`} to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.blog} mx-3  fw-bold`} to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.profile} mx-3  fw-bold`} to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.book} mx-3  fw-bold`} to="/book">Book</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.repairs} mx-3  fw-bold`} to="/repairs">Repairs</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.contact} mx-3  fw-bold`} to="/contact">Contact us</Link>
              </li>
              <li className="nav-item">
                <button type="button" class="btn btn-outline-warning mx-3" onClick={logoutUser}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;