import { Container } from "react-bootstrap";
import AppFooter from "./AppFooter/AppFooter";
import AppNav from "./AppNav";

const Layout = ({ children }) => {
  return (
    <>
      <AppNav />
      <Container>{children}</Container>
      <AppFooter />
    </>
  );
};
export default Layout;
