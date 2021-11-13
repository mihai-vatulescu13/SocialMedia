import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import EditAccount from "./pages/EditAccount/EditAccount"

function App() {
  const user = false;
  return (
    <div className="App">
      <h1>Welcome to social you!</h1>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editAccount" element={<EditAccount />} />
      </Routes>
    </div>
  );
}

export default App;
