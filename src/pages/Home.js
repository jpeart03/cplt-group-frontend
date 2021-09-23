import { Row, Col } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import LoadingButton from "../components/LoadingButton/LoadingButton";
import "./Home.scss";
import HomeChart from "../components/HomeChart/HomeChart";
import mobileDemoImg from "../images/mobile-demo.svg";
import webDemoImg from "../images/web-demo.svg";

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
          {/* <Link to="/register" className="btn btn-primary">
            Sign up
          </Link> */}
          <LoadingButton
            text="Login"
            onClick={() => login("Test2@test.com", "Test123!")}
            isLoading={authLoading}
            variant="primary"
          />
        </div>
      </section>
      <section className="section section-demo">
        <Row>
          <Col lg={4}>
            <h2>How the app works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu varius est. Nunc libero urna, tincidunt eget enim quis,
              sollicitudin imperdiet eros. Morbi malesuada non ante ut eleifend.
            </p>
          </Col>
          <Col lg={8} className="graphic">
            <picture>
              <source media="(min-width: 992px)" srcSet={webDemoImg} />
              <source media="(max-width: 993px)" srcSet={mobileDemoImg} />
              <img
                src={mobileDemoImg}
                alt="Graphic demonstrating the message function of the application."
              />
            </picture>
          </Col>
        </Row>
      </section>
      <section className="section section-data">
        <Row>
          <Col lg={4} className="text">
            <h2>About the data</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu varius est. Nunc libero urna, tincidunt eget enim quis,
              sollicitudin imperdiet eros. Morbi malesuada non ante ut eleifend.
            </p>
          </Col>
          <Col lg={8} className="chart">
            <HomeChart />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
