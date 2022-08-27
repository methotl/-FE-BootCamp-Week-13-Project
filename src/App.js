import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Loginform from "./components/loginform";
import Navbar from './components/navbar.js';
import "./App.css"

function App() {
  return (
    <p>
      <Navbar />
      <br></br>
      <Loginform />
    </p>
  );
}

export default App;
