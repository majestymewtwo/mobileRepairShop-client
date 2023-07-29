import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch(
      "https://giddy-alligator.cyclic.app/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      window.location.href = "/home";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className='bg-dark' style={{ height: "100vh" }}>
      <div className='row justify-content-center' style={{ padding: "9% 1%" }}>
        <div className='col-10 col-md-5 form-box login-form p-5 bg-light rounded-3 my-auto'>
          <div className='form-title'>
            <h5>Welcome to Mobile Repair Shop!</h5>
            <h2 className='fw-bold mb-4'>Login</h2>
          </div>
          <form onSubmit={loginUser}>
            <div className='form-floating mb-4'>
              <input
                className='form-control form-control-sm'
                type='email'
                value={email}
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                id='floataingInput'
              />
              <label htmlFor='floatingInput'>Email</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                className='form-control form-control-sm'
                id='floatingPassword'
                type='password'
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            <div className='mt-3'>
              <button className='btn btn-warning  text-white' type='submit'>
                Login
              </button>
            </div>
          </form>
          <div className='mt-3'>
            <span>
              Don't have account?
              <Link to='/register' className='text-warning'>
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
