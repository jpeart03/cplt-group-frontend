import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingButton from "../LoadingButton/LoadingButton";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUser,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./AppNav.scss";

const AppNav = () => {
  const { currentUser, authLoading, logout } = useAuth();
  let history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  const UserLinks = () => {
    if (currentUser) {
      return (
        <>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
              My Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/newmessage">
              <FontAwesomeIcon icon={faComment} className="me-2" />
              New Message
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className="me-3">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              {currentUser.email}
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
          <Navbar.Brand as={Link} to="/">
            Appreciation Notes
          </Navbar.Brand>
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
