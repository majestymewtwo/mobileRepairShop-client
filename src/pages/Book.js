import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import ErrorPage from "../components/ErrorPage";

function Book() {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [imei, setImei] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("pending");

  async function userAuth() {
    const response = await fetch(
      "https://mobile-repair-shop-server.onrender.com/api/user",
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    if (data.user) {
      setAuth(true);
      setEmail(data.curr.email);
    }
  }
  useEffect(() => {
    userAuth();
  });

  async function bookRepair(event) {
    event.preventDefault();
    const response = await fetch(
      "https://mobile-repair-shop-server.onrender.com/api/repair",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand,
          model,
          imei,
          status,
          description,
          type,
          email,
          order: true,
          collect: false,
          repair: false,
          deliver: false,
          date: new Date().toLocaleDateString(),
        }),
      }
    );

    const data = await response.json();
    if (data.repair) {
      alert("Your request for repair has been booked successfuly");
      window.location.href = "/book";
    } else {
      console.log(data);
      alert("An unknown error has occured");
    }
  }

  return (
    <div>
      {!auth && <ErrorPage />}
      {auth && (
        <div>
          <Header book='active' />
          <div className='py-5 bg-dark text-white'>
            <div className='container col-8'>
              <h1 className='text-warning text-center'>Book a new repair</h1>
              <form onSubmit={bookRepair}>
                <div className='mb-3'>
                  <label htmlFor='mobileBrand' className='form-label'>
                    Select your mobile brand :{" "}
                  </label>
                  <select
                    className='form-select'
                    aria-label='Choose Mobile Brand'
                    id='mobileBrand'
                    onChange={(e) => setBrand(e.target.value)}>
                    <option selected>Choose Brand</option>
                    <option value='Apple'>Apple</option>
                    <option value='Samsung'>Samsung</option>
                    <option value='Nothing'>Nothing</option>
                    <option value='Google'>Google</option>
                    <option value='Oneplus'>Oneplus</option>
                    <option value='Vivo'>Vivo</option>
                    <option value='iQOO'>iQOO</option>
                    <option value='Realme'>Realme</option>
                    <option value='Oppo'>Oppo</option>
                    <option value='Poco'>Poco</option>
                    <option value='Asus'>Asus</option>
                    <option value='Micromax'>Micromax</option>
                    <option value='Xiaomi'>Xiaomi</option>
                    <option value='Motorola'>Motorola</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='modelName' className='form-label'>
                    Enter Model Name :{" "}
                  </label>
                  <input
                    type='text'
                    name='modelName'
                    id='modelName'
                    className='form-control'
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='imei' className='form-label'>
                    Enter IMEI No. :{" "}
                  </label>
                  <input
                    type='text'
                    name='imei'
                    id='imei'
                    className='form-control'
                    onChange={(e) => setImei(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='repairDesc' className='form-label'>
                    Description of issue :{" "}
                  </label>
                  <textarea
                    className='form-control'
                    id='repairDesc'
                    rows='3'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label' htmlFor='repairType'>
                    Select your repair :{" "}
                  </label>
                  <select
                    className='form-select'
                    aria-label='Choose Repair Type'
                    id='repairType'
                    onChange={(e) => setType(e.target.value)}>
                    <option defaultValue>Choose Repair</option>
                    <option value='Battery Replacement'>
                      Battery Replacement
                    </option>
                    <option value='Display + Glass Replacement'>
                      Display + Glass Replacement
                    </option>
                    <option value='Speaker Replacement'>
                      Speaker Replacement
                    </option>
                    <option value='Camera Replacement'>
                      Camera Replacement
                    </option>
                    <option value='Tempered Glass Replacement'>
                      Tempered Glass Replacement
                    </option>
                    <option value='Button Replacement'>
                      Button Replacement
                    </option>
                    <option value='Charging Port Replacement'>
                      Charging Port Replacement
                    </option>
                    <option value='Body Housing Replacement'>
                      Body Housing Replacement
                    </option>
                  </select>
                </div>
                <input
                  type='submit'
                  value='Book a new repair'
                  className='btn btn-outline-warning mb-3 col-12 col-md-5 mx-md-4'
                />
                <button
                  type='reset'
                  className='btn btn-warning mb-3 col-12 col-md-5 mx-md-4'>
                  Reset Selections
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Book;