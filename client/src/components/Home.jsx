import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
const Home = () => {
  const [userName, setUserName] = useState();
  const [show, setShow] = useState(false);

  const userHome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.err);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userHome();
  }, []);

  return (
    <>
    <div className="container">
      <div className="sliban">
        {/* <Slider /> */}
      </div>
      <br />
      <div className="col-md-12">
        <p className="big_name">
          {show
            ? `Hello, ${userName}!! Welcome.Please Click on Grievance Tab to file your greivance `
            : "Welcome! User please Log in to file Your Grievance."}
        </p>
      </div>
      <br />
    </div>
    </>
  );
};

export default Home;
