import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function List() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("api/contacts").then(({ data }) => setRecords(data));
  }, []);
  return (
    <div>
      <h1
        style={{
          marginTop: "50px",
          maxWidth: "600px",
          margin: "auto",
          border: "2px solid",
        }}
      >
        {" "}
        Using Axios
      </h1>
      <ListGroup
        as="ol"
        numbered
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "2px solid",
        }}
      >
        {records.map((list, index) => (
          // <li key={index} style={{ padding: 0 }}>
          //   <span>firstName:{list.firstName}</span>
          //   <br />
          //   <span>lasttName:{list.lastName}</span>
          // </li>
          <ListGroup.Item as="li" key={index}>
            {" "}
            <span>firstName:{list.firstName}</span>
            <br />
            <span>lasttName:{list.lastName}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default List;
