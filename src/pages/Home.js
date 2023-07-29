import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import ErrorPage from "../components/ErrorPage";

function Home() {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  async function userAuth() {
    const response = await fetch(
      "https://giddy-alligator.cyclic.app/api/user",
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    if (data.user) {
      setAuth(true);
      setEmail(data.email);
    }
    console.log(data);
  }
  useEffect(() => {
    userAuth();
  }, []);

  return (
    <div>
      {!auth && <ErrorPage />}
      {auth && (
        <div className='content'>
          <Header home='active' />
          <Hero userEmail={email} />
          <Carousel />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
