import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            padding: "20px",
          }}
        >
          <Navbar.Brand>CUSTOMER- CRUD-APP</Navbar.Brand>
        </Link>
        <Link
          to="newform"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            padding: "20px",
          }}
        >
          ADD CUSTOMER
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
