import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import RegisterLoginPage from "../pages/RegisterLoginPage"
import UserDashboardPage from "../pages/UserDashboardPage"


const Routes = () => {
  return (
    <BrowserRouter>
      {/* TODO: Add AppNav component */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={RegisterLoginPage} />
        <Route exact path="/register" component={RegisterLoginPage} />
        <Route exact path="/dashboard" component={UserDashboardPage}/>
        {/* Add More Routes Here */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
