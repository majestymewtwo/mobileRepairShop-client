import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch(
      "https://mobile-repair-shop-server.onrender.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          contactNo,
          gender,
          email,
          password,
          address,
        }),
      }
    );

    const data = await response.json();
    if (data.user) {
      alert("Succefully Registered");
      window.location.href = "/";
    } else {
      alert("Email already exists");
    }
  }
  return (
    <div className='bg-dark' style={{ height: "100vh", paddingBottom: "25%" }}>
      <div className='row justify-content-center' style={{ padding: "5% 1%" }}>
        <div className='form-box col-10 col-md-5 registration-form p-5 both-form bg-light rounded-3'>
          <div className='form-title'>
            <h5>Welcome to Mobile Repair Shop!</h5>
            <h2 className='fw-bold mb-4'>Create Your Account</h2>
          </div>
          <form onSubmit={registerUser}>
            <input
              type='firstName'
              value={firstName}
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              className='my-2 form-control form-control-sm'
            />
            <input
              type='lastName'
              value={lastName}
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              className='my-2 form-control form-control-sm'
            />
            <input
              type='contactNo'
              value={contactNo}
              placeholder='Contact No'
              onChange={(e) => setContactNo(e.target.value)}
              className='my-2 form-control form-control-sm'
            />
            <input
              type='gender'
              value={gender}
              placeholder='Gender'
              onChange={(e) => setGender(e.target.value)}
              className='my-2 form-control form-control-sm'
            />
            <div className='md-form'>
              <textarea
                placeholder='Address'
                type='text'
                name='address'
                rows='3'
                className='my-2 form-control md-textarea'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <input
              type='email'
              value={email}
              placeholder='E-Mail'
              onChange={(e) => setEmail(e.target.value)}
              className='my-2 form-control form-control-sm'
            />
            <input
              type='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              className='my-2 form-control form-control-sm'
            />
            <div className='mt-3'>
              <input
                type='submit'
                value='Sign Up'
                className='btn  text-white btn-warning'
              />
            </div>
          </form>
          <div className=' mt-3'>
            <span>Already have an account? </span>
            <Link to='/' className='text-warning'>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
