import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import EditAccount from "./pages/EditAccount/EditAccount"
import { connect } from "react-redux";

function App({ connectedUser }) {

  return (
    <div className="App">
      <h1>Welcome to social you!</h1>
      <Routes>
        <Route path="/" element={connectedUser.name ? <Home /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={connectedUser.name ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={connectedUser.name ? <Navigate replace to="/" /> : <Register />} />
        <Route path="/editAccount" element={<EditAccount />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer
  }
}

export default connect(mapStateToProps)(App);
