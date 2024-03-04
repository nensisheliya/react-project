import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navber";
import AllRouter from "./Allrouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmailLogin, Emailsignup, GoogleAuth } from "./Config";
import { addDoc, collection } from "firebase/firestore";
function App() {
  // googleauth


  return (
    <div className="App">
      <Navbar />
      <AllRouter />
    </div>
  );
}

export default App;
