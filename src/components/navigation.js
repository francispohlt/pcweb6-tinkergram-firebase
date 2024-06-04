import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
        <Nav>
          <Nav.Link href="/add">New Post</Nav.Link>
          <Nav.Link onClick={(e) => signOut(auth)}>Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}