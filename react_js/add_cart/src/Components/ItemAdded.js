import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

function ItemAdded(props) {
  const [show, setShow] = useState(true);
  const { item } = props;

  return (
    <Row>
      <Col xs={14}>
        <Toast
          className="top-end"
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">{item.name}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Added successfully</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ItemAdded;
