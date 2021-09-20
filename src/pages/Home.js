import { Button, Row, Col } from "react-bootstrap";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="section section-hero">
        <div>
          <h1>Appreciation App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            varius est. Nunc libero urna, tincidunt eget enim quis, sollicitudin
            imperdiet eros. Morbi malesuada non ante ut eleifend. Suspendisse
            ultrices faucibus magna eget dictum. Aliquam a mi tellus.
          </p>
          <Button variant="primary">Sign Up!</Button>
        </div>
      </section>
      <section className="section section-demo">
        <p>TODO: MESSAGE DEMO VIDEO HERE</p>
      </section>
      <section className="section section-data">
        <Row>
          <Col lg={6}>
            <div className="graphic">TODO: GRAPHIC HERE</div>
          </Col>
          <Col lg={6}>
            <h2>About the data</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu varius est. Nunc libero urna, tincidunt eget enim quis,
              sollicitudin imperdiet eros. Morbi malesuada non ante ut eleifend.
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
