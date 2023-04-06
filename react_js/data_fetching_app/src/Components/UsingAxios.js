import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Styles from "./UsingAxios.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import Loader from "./Loader";

function List() {
  const [records, setRecords] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios.get("api/contacts").then(({ data }) => {
      setRecords(data);
      setLoader(false);
    });
  }, []);
  return (
    <div>
      <h1 className={Styles.heading}>Using Axios</h1>
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

export default List;
