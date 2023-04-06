import React from "react";
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Styles from "./Fetch.module.css";
import Loader from "./Loader";

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
      });
  }, []);

  return (
    <div>
      <h1 className={Styles.heading}> Using Fetch api</h1>
      {!loader ? (
        <ListGroup as="ol" numbered className={Styles.list}>
          {records.map((list, index) => (
            <ListGroup.Item as="li" key={index}>
              {" "}
              <span>firstName:{list.firstName}</span>
              <br />
              <span>lasttName:{list.lastName}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default Fetch;
