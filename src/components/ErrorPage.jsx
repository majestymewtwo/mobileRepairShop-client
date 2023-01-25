import "./Main.css";

function ErrorPage(){
    return(
        <div className="error-page text-center bg-dark text-white">
            <h1 className="heading text-warning">0___0</h1>
            <h5 className="desc">Please wait, page is loading</h5>
            <br />
            <a href='/' className='text-warning'>
              Go back to login page
            </a>
        </div>
    )
}
export default ErrorPage;