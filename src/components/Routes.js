import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import UserDashboardPage from "../pages/UserDashboardPage";
import NewMessagePage from "../pages/NewMessagePage.js";
import RecipientsPage from "../pages/RecipientsPage";
import AllMessagesPage from "../pages/AllMessagesPage";
import EditMyAccountPage from "../pages/EditMyAccountPage";
import Layout from "./Layout";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <ProtectedRoute
            exact
            path="/dashboard"
            component={UserDashboardPage}
          />
          <ProtectedRoute exact path="/newmessage" component={NewMessagePage} />
          <ProtectedRoute exact path="/recipients" component={RecipientsPage} />
          <ProtectedRoute
            exact
            path="/allmessages"
            component={AllMessagesPage}
          />
          <ProtectedRoute
            exact
            path="/editProfile"
            component={EditMyAccountPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
