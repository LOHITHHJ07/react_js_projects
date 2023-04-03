import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "./Authentication";

function NavBar() {
  const auth = useAuth();
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className={styles.NavTitle}>
            Proteced Route
          </Navbar.Brand>
          <Nav className={styles.NavLink}>
            <Nav.Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Profile
              </Link>
            </Nav.Link>

            {!auth.user && (
              <Nav.Link>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
