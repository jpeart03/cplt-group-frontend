import LoginForm from "../components/LoginForm/LoginForm";
import { Redirect, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import "./RegisterLogin.scss";

const LoginPage = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <>
        <Card className="auth-card">
          <Card.Body>
            <Card.Title>
              <h4>Please log in</h4>
            </Card.Title>
            <LoginForm />
          </Card.Body>
          <Card.Body style={{ borderTop: "1px solid #dfdfdf" }}>
            <span className="me-1">No account?</span>
            <Card.Link as={Link} to="/register">
              Register
            </Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default LoginPage;
