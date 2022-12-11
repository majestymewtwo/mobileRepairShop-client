import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Map from "../components/Map";

function Contact() {
  return (
    <div>
      <Header contact="active" />
      <ContactUs />
      <Map />
      <Footer />
    </div>
  );
}

export default Contact;
