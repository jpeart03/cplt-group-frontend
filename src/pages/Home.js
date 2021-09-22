import { Row, Col } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import LoadingButton from "../components/LoadingButton/LoadingButton";
import "./Home.scss";
import HomeChart from "../components/HomeChart/HomeChart";

const Home = () => {
  const { register, login, logout, currentUser, authLoading } = useAuth();

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
          <LoadingButton
            variant="primary"
            text="TEST BUTTON"
            onClick={() => login("Test1@test.com", "Test123!")}
            isLoading={authLoading}
          />
        </div>
      </section>
      <section className="section section-demo">
        <p>TODO: MESSAGE DEMO VIDEO HERE</p>
      </section>
      <section className="section section-data">
        <Row>
          <Col lg={6} className="graphic">
            <HomeChart />
          </Col>
          <Col lg={6} className="text">
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
