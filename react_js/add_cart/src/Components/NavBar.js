import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Container
      style={{
        maxWidth: "2000px",
        margin: "0",
        paddingLeft: "20px",
        zIndex: "-1",
      }}
    >
      <Navbar expand="lg" variant="light" bg="light">
        <Container style={{ margin: "0", padding: "0" }}>
          <Navbar.Brand href="#">Axelor Pos</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
