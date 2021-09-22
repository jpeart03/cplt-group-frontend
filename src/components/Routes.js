import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import RegisterLoginPage from "../pages/RegisterLoginPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import Layout from "./Layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={RegisterLoginPage} />
          <Route exact path="/register" component={RegisterLoginPage} />
          <Route exact path="/dashboard" component={UserDashboardPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
