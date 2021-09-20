import { Container } from "react-bootstrap";
import AppFooter from "./AppFooter/AppFooter";
import AppNav from "./AppNav";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <AppNav />
      <Container>{children}</Container>
      <AppFooter />
    </div>
  );
};
export default Layout;
