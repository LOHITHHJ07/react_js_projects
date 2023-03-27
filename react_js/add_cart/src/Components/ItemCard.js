import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemCard({ item, addCart, showToast }) {
  const { img, name, price } = item;
  return (
    <div>
      <Card
        style={{
          width: "12rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{
            width: "10rem",
            height: "10rem",
          }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{`₹ ${price}`}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              addCart(item);
            }}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
