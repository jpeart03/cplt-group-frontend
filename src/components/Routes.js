import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      {/* TODO: Add AppNav component */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add More Routes Here */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
