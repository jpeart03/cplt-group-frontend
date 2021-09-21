import { Container, Navbar } from "react-bootstrap";
import LoadingButton from "../LoadingButton/LoadingButton";
import { useAuth } from "../../contexts/AuthContext";
const AppNav = () => {
  const { currentUser, authLoading, login, logout } = useAuth();

  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>Appreciation</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {currentUser ? (
            <>
              <Navbar.Text>Welcome, {currentUser.email}</Navbar.Text>
              <LoadingButton
                text="Log out"
                variant="secondary"
                isLoading={authLoading}
                onClick={() => logout()}
              />
            </>
          ) : (
            <LoadingButton
              text="Log in"
              variant="secondary"
              isLoading={authLoading}
              onClick={() => login("Test1@test.com", "Test123!")}
            />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNav;
