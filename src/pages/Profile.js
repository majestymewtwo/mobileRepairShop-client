import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileComp from "../components/ProfileComp";
import { useState, useEffect } from "react";
import ErrorPage from "../components/ErrorPage";

function Profile() {
  const [auth, setAuth] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
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
      setContactNo(data.curr.contactNo);
      setEmail(data.curr.email);
      setFirstName(data.curr.firstName);
      setLastName(data.curr.lastName);
      setAddress(data.curr.address);
    }
  }
  useEffect(() => {
    userAuth();
  });

  return (
    <div>
      {!auth && <ErrorPage />}
      {auth && (
        <div>
          <Header profile='active' />
          <ProfileComp
            name={firstName + " " + lastName}
            firstName={firstName}
            lastName={lastName}
            contactNo={contactNo}
            email={email}
            address={address}
          />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Profile;
