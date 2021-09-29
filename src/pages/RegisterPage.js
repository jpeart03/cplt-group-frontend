import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Redirect, Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import "./RegisterLogin.scss";

const RegisterPage = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <>
        <Card className="auth-card">
          <Card.Body>
            <Card.Title>
              <h4>Register as a New User</h4>
            </Card.Title>
            <RegistrationForm />
          </Card.Body>
          <Card.Body style={{ borderTop: "1px solid #dfdfdf" }}>
            <span className="me-1">Already have an account?</span>
            <Card.Link as={Link} to="/login">
              Login
            </Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default RegisterPage;
