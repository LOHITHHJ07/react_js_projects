import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className={styles.NavTitle}>
            Proteced Route
          </Navbar.Brand>
          <Nav className={styles.Link}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                padding: "20px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                padding: "20px",
              }}
            >
              About
            </Link>
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                padding: "20px",
              }}
            >
              Profile
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
