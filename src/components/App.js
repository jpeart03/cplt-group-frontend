import Layout from "./Layout";
import Routes from "./Routes";
import { AuthProvider } from "../contexts/AuthContext";
import "./App.scss";
import { BrowserRouter, Route } from 'react-router-dom'
import RegisterLoginPage from "../pages/RegisterLoginPage";
import UserDashboardPage from "../pages/UserDashboardPage";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes />
      </Layout>
    </AuthProvider>
  );
}

export default App;
