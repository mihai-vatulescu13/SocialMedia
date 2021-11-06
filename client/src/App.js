import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import EditAccount from "./pages/EditAccount/EditAccount"
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Welcome to social you!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="editAccount" element={<EditAccount />} />
      </Routes>
    </div>
  );
}

export default App;
