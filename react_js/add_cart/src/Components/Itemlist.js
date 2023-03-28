import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function Itemlist(props) {
  const { item } = props;
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.name}</div>
        {`₹${item.price}x${item.quantity}`}
      </div>
      <Badge bg="primary" pill>
        {item.price * item.quantity + ".00"}
      </Badge>
    </ListGroup.Item>
  );
}

export default Itemlist;
