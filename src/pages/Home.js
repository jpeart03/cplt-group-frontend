import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.scss";
import HomeChart from "../components/HomeChart/HomeChart";
import mobileDemoImg from "../images/mobile-demo.svg";
import webDemoImg from "../images/web-demo.svg";
import WordCloud from "../components/WordCloud/WordCloud";

const Home = () => {
  return (
    <>
      <section className="section section-hero">
        <Row>
          <Col lg={12}>
            <h1>Show your appreciation 😊</h1>
            <p>
              Studies show that people who deliberately practice appreciation
              through acts of kindness, daily reflection and
              <span className="color__indigo">
                {" "}
                expressions of gratitude
              </span>{" "}
              rate their lives as more enjoyable than average. From a coworker
              doing a great job, to a significant other who makes your day
              brighter, we want to help people connect with those they
              appreciate and share in their thanks!
            </p>
            <Link to="/register" className="btn btn-primary">
              Sign up now
            </Link>
          </Col>
        </Row>
      </section>
      <section className="section section-demo">
        <Row>
          <Col lg={6}>
            <h2>How the app works</h2>
            <p>
              Users can create their personal profile and a list of recipients
              with whom they want to share notes. As moments of gratitude pop up
              throughout the day, the user can jot down a quick note and deliver
              it to their counterparts via email and/or text message.
            </p>
          </Col>
          <Col lg={6} className="graphic">
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
          <Col lg={6} className="chart">
            <HomeChart />
          </Col>
          <Col lg={6} className="text">
            <h2>About the data</h2>
            <p>
              Our data is fully anonymized to ensure privacy of our clients. We
              allow users to track their individual analytics so they can keep
              on top of their own peronalized progress. Each individual has
              access to a customized dashboard so they can track how expressing
              gratitude has improved their lives.
            </p>
          </Col>
        </Row>
      </section>
      <section className="section section-cloud">
        <Row>
          <Col lg={12} className="text-center">
            <h2>What our users are saying!</h2>
            <WordCloud />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
