import Layout from "./Layout";
import Routes from "./Routes";
import { AuthProvider } from "../contexts/AuthContext";
import "./App.scss";

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
