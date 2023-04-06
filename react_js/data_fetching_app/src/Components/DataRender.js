import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Styles from "./Fetch.module.css";
function dataRender({ records }) {
  return (
    <div>
      <ListGroup as="ol" numbered className={Styles.list}>
        {records.map((data, index) => (
          <ListGroup.Item as="li" key={index}>
            {" "}
            <span>firstName:{data.firstName}</span>
            <br />
            <span>lasttName:{data.lastName}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default dataRender;
