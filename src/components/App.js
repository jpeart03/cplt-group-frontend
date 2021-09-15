import { Card } from "react-bootstrap";
import "./App.scss";

function App() {
  return (
    // This will be removed. Added as an example.
    <Card className="example-card">
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
    </Card>
  );
}

export default App;
