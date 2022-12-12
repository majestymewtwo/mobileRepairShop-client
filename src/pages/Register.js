function Register() {
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <div className="row justify-content-center" style={{ padding: "6% 1%" }}>
        <div class="form-box col-10 col-md-5 registration-form p-5 both-form bg-light rounded-3">
          <div class="form-title">
            <h5>Welcome to Mobile Repair Shop!</h5>
            <h2 class="fw-bold mb-4">Create Your Account</h2>
          </div>
          <form action="">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="First Name"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">First Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Last Name"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Last Name</label>
            </div>
            <div class="form-floating mb-3">
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
              <button class="btn  text-white btn-warning">Sign Up</button>
            </div>
          </form>
          <div class=" mt-3">
            <span>Already have an account? </span>
            <a href="/#" className="text-warning">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
