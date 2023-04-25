import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link to="/" className={Styles.navbar}>
          <Navbar.Brand>CUSTOMER- CRUD-APP</Navbar.Brand>
        </Link>
        <Link to="new" className={Styles.navbar}>
          ADD CUSTOMER
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
