import React from "react";
import { useState, useEffect } from "react";
import Styles from "./Fetch.module.css";
import Loader from "./Loader";
import DataRender from "./DataRender";
function Fetch() {
  const [records, setRecords] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetch("api/contacts")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className={Styles.heading}> Using Fetch api</h1>
      {!loader ? (
        <DataRender records={records}></DataRender>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default Fetch;
