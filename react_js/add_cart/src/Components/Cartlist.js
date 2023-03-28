import Alert from "react-bootstrap/Alert";
import Itemlist from "./Itemlist";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import styles from "./Cartlist.module.css";

function Cartlist(props) {
  const { cart } = props;
  return cart.length === 0 ? (
    <div className={styles.cartstyle}>
      {" "}
      <Alert key="warning" variant="warning">
        cart is Empty
      </Alert>
    </div>
  ) : (
    <div className={styles.cartstyle}>
      <ListGroup as="ol" numbered>
        {cart.map((item, index) => {
          return <Itemlist item={item} key={item.id}></Itemlist>;
        })}
      </ListGroup>
      {/* net total*/}
      <div>
        <ListGroup as="ol">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Net total</div>
            </div>
            <Badge bg="primary" pill>
              {cart
                .map((value) => value.price * value.quantity)
                .reduce((total, value) => total + value, 0) + ".00"}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default Cartlist;
