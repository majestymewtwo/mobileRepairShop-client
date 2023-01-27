import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RepairStatus from "../components/RepairStatus";
import ErrorPage from "../components/ErrorPage";

export default function Status() {
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    userAuth();
  }, [auth]);

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
      getRepairs();
    }
  }

  async function getRepairs() {
    const response = await fetch(
      "https://mobile-repair-shop-server.onrender.com/api/repairs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    const data = await response.json();
    setRepairs(data.list);
  }

  return (
    <div>
      {!auth && <ErrorPage />}
      {auth && (
        <div className='bg-dark'>
          <Header status='active' />
          <h1 className='text-warning text-center mb-4 pb-4 '>
            Repairs Status
          </h1>
          {!repairs.length && (
            <div
              className='text-center mb-4 pb-4 text-white'
              style={{ height: "10rem" }}>
              <h3>There seems to be no pending repairs!.</h3>
              <p>You can book a repair now and we'll be there!</p>
            </div>
          )}
          <div className='row px-4'>
            {repairs.map((repair) => {
              return (
                <RepairStatus
                  key={repair._id}
                  brand={repair.brand}
                  model={repair.model}
                  imei={repair.imei}
                  repairType={repair.type}
                  status={repair.status}
                  order={repair.order}
                  collect={repair.collect}
                  repair={repair.repair}
                  deliver={repair.deliver}
                />
              );
            })}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
