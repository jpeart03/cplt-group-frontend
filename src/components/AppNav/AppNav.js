import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingButton from "../LoadingButton/LoadingButton";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./AppNav.scss";

const AppNav = () => {
  const { currentUser, authLoading, logout } = useAuth();
  let history = useHistory();

  const handleLogout = () => {
    // TODO: consider adding a dialog box to prevent accidentally logging out
    logout();
    history.push("/");
  };

  const UserLinks = () => {
    if (currentUser) {
      return (
        <>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">
              My Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/recipients">
              My Recipients
            </Nav.Link>
            <Nav.Link as={Link} to="/newmessage">
              New Message
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className="me-3">
              Welcome, {currentUser.email}
            </Navbar.Text>
            <LoadingButton
              text="Log out"
              variant="outline-primary"
              isLoading={authLoading}
              onClick={handleLogout}
            />
          </Nav>
        </>
      );
    } else
      return (
        <Nav>
          <Link className="btn btn-outline-primary" to="/login">
            Login
          </Link>
        </Nav>
      );
  };

  return (
    <>
      {!currentUser && (
        <Navbar bg="primary" variant="dark">
          <Container>
            <span className="top-nav-text__white">Be nice to people</span>
            <Link
              to="/register"
              className="btn btn-primary justify-content-end"
            >
              Sign up
            </Link>
          </Container>
        </Navbar>
      )}

      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        className="nav-shadow"
      >
        <Container>
          <Navbar.Brand href="/">Appreciation</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse
            className={!currentUser ? "justify-content-end" : ""}
          >
            <UserLinks />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNav;
