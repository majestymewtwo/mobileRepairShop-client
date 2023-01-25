import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { useState, useEffect } from "react";
import ErrorPage from "../components/ErrorPage";

function Contact() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");

  async function sendQuery(event) {
    event.preventDefault();
    const response = await fetch(
      "https://mobile-repair-shop-server.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contactNo,
          message,
        }),
      }
    );
    const data = await response.json();
    if (data.query) {
      alert("Query has been sent successfully");
    } else {
      alert("An unknown error has occurred");
    }
  }

  async function userAuth() {
    const response = await fetch("http://localhost:1337/api/user", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (data.user) {
      setAuth(true);
    }
    console.log(data);
  }
  useEffect(() => {
    userAuth();
  });

  return (
    <div>
      {!auth && <ErrorPage />}
      {auth && (
        <div>
          <Header contact='active' />
          <div className='px-4 py-5 bg-dark text-white'>
            <section className='mb-4'>
              <h2 className='fw-bold my-5 fs-1 text-center text-warning'>
                CONTACT US
              </h2>
              <p className='text-center mx-auto mb-5 fw-semibold fs-5 w-50'>
                Do you have questions? Please do not hesitate to contact us
                directly. Our team will comeback to you within a few hours to
                solve your query.
              </p>
              <div className='row'>
                {/* Form  */}
                <div className='col-10 col-md-8 mb-5 mx-auto'>
                  <form id='contactform' onSubmit={sendQuery}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='md-form mb-0'>
                          <input
                            type='text'
                            name='name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label htmlFor='name'>Your name</label>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='md-form mb-0'>
                          <input
                            type='text'
                            name='email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor='name'>Your email</label>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='md-form mb-0'>
                          <input
                            type='text'
                            name='subject'
                            className='form-control'
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                          />
                          <label htmlFor='subject'>Phone Number</label>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='md-form'>
                          <textarea
                            type='text'
                            name='message'
                            rows='3'
                            className='form-control md-textarea'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                          <label htmlFor='message'>Your message</label>
                        </div>
                      </div>
                    </div>
                    <div className='text-center text-md-left'>
                      <button
                        className='btn btn-warning w-25 fw-bold fs-5 my-4'
                        type='submit'>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                {/* Icons  */}
                <div className='col-6 col-md-6 mx-auto text-center text-primary'>
                  <div className='d-flex flex-column flex-md-row justify-content-center mb-0 '>
                    <div className='my-auto mx-4'>
                      <i className='fas fa-map-marker-alt mt-4 fa-3x text-warning'></i>
                      <p className='text-white fw-semibold'>Tamil Nadu,India</p>
                    </div>
                    <div className='my-auto mx-4'>
                      <i className='fas fa-phone mt-4 fa-3x text-warning'></i>
                      <p className='text-white fw-semibold'>+91 9876543210</p>
                    </div>
                    <div className='my-auto mx-4'>
                      <i className='fas fa-envelope mt-4 fa-3x text-warning'></i>
                      <p className='text-white fw-semibold'>test@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Map />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Contact;
