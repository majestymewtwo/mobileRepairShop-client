import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Header home="active" />
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
