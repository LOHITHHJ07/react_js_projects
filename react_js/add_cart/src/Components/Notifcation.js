import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function Notifcation(props) {
  const { item, onClose, index } = props;
  return (
    <Row>
      <Col xs={14}>
        <Toast
          className="top-end"
          onClose={() => {
            onClose(index);
          }}
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

export default Notifcation;
