import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Styles from "./UsingAxios.module.css";
import Loader from "./Loader";
import DataRender from "./DataRender";

function UsingAxios() {
  const [records, setRecords] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get("api/contacts")
      .then(({ data }) => {
        setRecords(data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className={Styles.heading}>Using Axios</h1>
      {!loader ? (
        <DataRender records={records}></DataRender>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default UsingAxios;
