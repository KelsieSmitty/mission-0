import muckyPawsLogo from "../images/muckyPawsLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarFile() {
  return (
    <Navbar
      className="navbar text-center justify-content-center pt-1 pb-1 "
      expand="lg"
      style={{
        backgroundColor: "rgba(86, 217, 245, 0.4)",
        border: "2px #56d9f5 solid",
        color: "black",
        width: "100vw",
      }}
    >
      <Container
        className="container "
        style={{
          marginRight: "1rem",
          marginLeft: "1rem",
        }}
      >
        <Navbar.Brand href="#">
          <img
            src={muckyPawsLogo}
            alt="Logo"
            width="80"
            height="80"
            className="d-inline-block align-text-center "
          />
          Mucky Paws Rescue
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link
              href="#home"
              style={{
                color: "black",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                color: "black",
              }}
            >
              Adopt a Friend
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                color: "black",
              }}
            >
              Contact Us
            </Nav.Link>
            <button
              className="btn btn-bg btn-outline-info ms-2"
              style={{
                color: "black",
                border: "2px #56d9f5 solid",
              }}
              type="button"
            >
              Login
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
