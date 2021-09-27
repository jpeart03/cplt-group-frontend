import { Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import NotFoundPage from "../../pages/NotFoundPage";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <NotFoundPage />
      }
    />
  );
};

export default ProtectedRoute;
