import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileComp from "../components/ProfileComp";

function Profile() {
  return (
    <div>
      <Header profile="active" />
      <ProfileComp />
      <Footer />
    </div>
  );
}

export default Profile;
