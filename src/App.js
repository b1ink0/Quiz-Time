import "./App.scss";
import { AuthProvider } from "./context/AuthContext";
import LogInPage from "./components/auth/LogInPage";
import { StateProvider } from "./context/StateContext";

function App() {
  return (
    <AuthProvider>
      <StateProvider>
        <LogInPage />
        <div className="borderCon"></div>
      </StateProvider>
    </AuthProvider>
  );
}

export default App;
