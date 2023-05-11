import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar({ searchText, setSearchText }) {
  const history = useLocation();

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link to="/" className={styles.navbar}>
          <Navbar.Brand
            onClick={() => {
              if (history.pathname === "/") {
                window.location.reload();
              }
            }}
          >
            CUSTOMER- CRUD-APP
          </Navbar.Brand>
        </Link>
        {history.pathname === "/" && (
          <Link to="new" className={styles.navbar}>
            <button className={styles.addcus}> ADD CUSTOMER</button>
          </Link>
        )}

        {history.pathname === "/" && (
          <SearchBar
            className={styles.navbar}
            searchText={searchText}
            setSearchText={setSearchText}
          ></SearchBar>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
