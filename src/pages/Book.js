import Header from "../components/Header";
import Footer from "../components/Footer";
import BookRepair from "../components/BookRepair";

function Book() {
  return (
    <div>
      <Header book="active" />
      <BookRepair />
      <Footer />
    </div>
  );
}

export default Book;
