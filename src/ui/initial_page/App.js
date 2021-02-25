// this file should follow main.js
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { AuthProvider } from "../../context/auth_context";
import LogIn from "../authentications/log_in";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <LogIn />
      </div>
    </AuthProvider>
  );
}

export default App;
