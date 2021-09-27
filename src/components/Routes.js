import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import RegisterLoginPage from "../pages/RegisterLoginPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import NewMessagePage from "../pages/NewMessagePage.js";
import RecipientsPage from "../pages/RecipientsPage";
import Layout from "./Layout";
import NewMessage from "../pages/NewMessage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* TODO: Add AppNav component */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={RegisterLoginPage} />
          <Route exact path="/register" component={RegisterLoginPage} />
          <Route exact path="/dashboard" component={UserDashboardPage} />
          {/* <Route exact path="/newmessage" component={NewMessagePage}/> */}
          <Route exact path="/newmessage" component={NewMessage} />
          <Route exact path="/recipients" component={RecipientsPage} />
          {/* Add More Routes Here */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
