import { Container } from "react-bootstrap";
import AppNav from "./AppNav";

const Layout = ({ children }) => {
  return (
    <>
      <AppNav />
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
