import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import RegisterLoginPage from "../pages/RegisterLoginPage"
import UserDashboardPage from "../pages/UserDashboardPage"
import NewMessagePage from "../pages/NewMessagePage.js"
import RecipientsPage from "../pages/RecipientsPage";
import EditMyAccountPage from "../pages/EditMyAccountPage"
import Layout from "./Layout";


const Routes = () => {
  return (
    <BrowserRouter>
    <Layout>
      {/* TODO: Add AppNav component */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={RegisterLoginPage} />
        <Route exact path="/register" component={RegisterLoginPage} />
        <Route exact path="/dashboard" component={UserDashboardPage}/>
        <Route exact path="/newmessage" component={NewMessagePage}/>
        <Route exact path="/recipients" component={RecipientsPage}/>
        <Route exact path="/editprofile" component={EditMyAccountPage}/>
        {/* Add More Routes Here */}
      </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
