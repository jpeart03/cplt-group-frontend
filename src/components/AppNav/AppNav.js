import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingButton from "../LoadingButton/LoadingButton";
import { useAuth } from "../../contexts/AuthContext";
import "./AppNav.scss";
const AppNav = () => {
  const { currentUser, authLoading, logout } = useAuth();

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

      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>Appreciation</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {currentUser ? (
              <>
                <Navbar.Text className="me-3">
                  Welcome, {currentUser.email}
                </Navbar.Text>
                <LoadingButton
                  text="Log out"
                  variant="outline-primary"
                  isLoading={authLoading}
                  onClick={() => logout()}
                />
              </>
            ) : (
              <Link className="btn btn-outline-primary" to="/login">
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNav;
