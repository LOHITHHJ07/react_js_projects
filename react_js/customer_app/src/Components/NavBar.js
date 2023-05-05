import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar({ searchText, setSearchText }) {
  const history = useLocation();

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link to="/" className={Styles.navbar}>
          <Navbar.Brand>CUSTOMER- CRUD-APP</Navbar.Brand>
        </Link>
        {history.pathname === "/" && (
          <Link to="new" className={Styles.navbar}>
            <button className={Styles.addcus}> ADD CUSTOMER</button>
          </Link>
        )}

        {history.pathname === "/" && (
          <SearchBar
            className={Styles.navbar}
            searchText={searchText}
            setSearchText={setSearchText}
          ></SearchBar>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
