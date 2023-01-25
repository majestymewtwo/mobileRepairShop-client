import "./Main.css";

function ErrorPage(){
    return(
        <div className="error-page text-center bg-dark text-white">
            <h1 className="heading text-warning">Error 404</h1>
            <h5 className="desc">Whoops! There seems to be some error</h5>
            <br />
            <a href='/' className='text-warning'>
              Try logging in
            </a>
        </div>
    )
}
export default ErrorPage;