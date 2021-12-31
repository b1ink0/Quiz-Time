import "./components/Animations/Keyframes.scss";
import { AuthProvider } from "./context/AuthContext";
import LogInPage from "./components/auth/LogInPage";
import { StateProvider } from "./context/StateContext";
import "./components/themes/desktop.scss";

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
