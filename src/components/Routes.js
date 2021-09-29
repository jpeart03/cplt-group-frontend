import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import RegisterLoginPage from "../pages/RegisterLoginPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import NewMessage from "../pages/NewMessagePage.js";
import RecipientsPage from "../pages/RecipientsPage";
import AllMessagesPage from "../pages/AllMessagesPage";
import EditMyAccountPage from "../pages/EditMyAccountPage"
import Layout from "./Layout";
// import NewMessage from "../pages/NewMessagePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={RegisterLoginPage} />
          <Route exact path="/register" component={RegisterLoginPage} />
          <ProtectedRoute
            exact
            path="/dashboard"
            component={UserDashboardPage}
          />
          <ProtectedRoute exact path="/newmessage" component={NewMessage} />
          <ProtectedRoute exact path="/recipients" component={RecipientsPage} />
          <ProtectedRoute exact path="/allmessages" component={AllMessagesPage} />
          <ProtectedRoute exact path="/editProfile" component={EditMyAccountPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
