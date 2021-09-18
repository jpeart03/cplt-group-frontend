import { Card } from "react-bootstrap";
import "./App.scss";
import { BrowserRouter, Route } from 'react-router-dom'
import RegisterLoginPage from "../pages/RegisterLoginPage";
import UserDashboardPage from "../pages/UserDashboardPage";

function App() {
  return (
    // This will be removed. Added as an example.
  <BrowserRouter>
    {/* <Card className="example-card">
      <Card.Body>
        <Card.Title>Example react-bootstrap card</Card.Title>
        <Card.Text>Added initial packages to build front-end:</Card.Text>
        <Card.Link href="https://react-bootstrap.github.io/components">
          React Bootstrap
        </Card.Link>
        <Card.Link href="https://recharts.org/en-US">Recharts</Card.Link>
        <Card.Link href="https://www.npmjs.com/package/@azure/ai-text-analytics">
          Azure Text Analytics
        </Card.Link>
      </Card.Body>
    </Card> */}
    <Route path="/login" component={RegisterLoginPage} />
    <Route exact path="/register" component={RegisterLoginPage} />
    <Route exact path="/dashboard" component={UserDashboardPage}/>
  </BrowserRouter>
  );
}

export default App;
