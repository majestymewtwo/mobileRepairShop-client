function Login() {
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <div className="row justify-content-center" style={{ padding: "9% 1%" }}>
        <div class="col-10 col-md-5 form-box login-form p-5 bg-light rounded-3 my-auto">
          <div class="form-title">
            <h5>Welcome to Mobile Repair Shop!</h5>
            <h2 class="fw-bold mb-4">Login</h2>
          </div>
          <form action="">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control form-control-sm"
                placeholder="Email"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control form-control-sm"
                placeholder="Password"
                id="floatingPassword"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div class="mt-3">
              <button class="btn btn-warning  text-white">
                <a href="/#/home" className="text-decoration-none text-white">
                  Login
                </a>
              </button>
            </div>
          </form>
          <div class="mt-3">
            <span>
              Don't have account?
              <a href="/#/register" className="text-warning">
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
