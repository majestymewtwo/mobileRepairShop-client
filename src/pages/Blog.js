import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import FAQ from "../components/FAQ";

function Blog() {
  return (
    <div>
      <Header blog="active" />
      <Carousel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Blog;
