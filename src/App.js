import { AuthProvider } from "./context/AuthContext";
import LogInPage from "./components/auth/LogInPage";
import { StateProvider } from "./context/StateContext";
import "./components/Animations/Keyframes.scss";
import "./components/themes/desktop.scss";

function App() {
  return (
    <AuthProvider>
      <StateProvider>
        <LogInPage />
      </StateProvider>
    </AuthProvider>
  );
}

export default App;
