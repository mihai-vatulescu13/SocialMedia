import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import EditAccount from "./pages/EditAccount/EditAccount";
import { connect } from "react-redux";
import "./App.css";

function App({ connectedUser }) {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            connectedUser.name ? <Home /> : <Navigate replace to="/login" />
          }
        />
        <Route
          path="/login"
          element={connectedUser.name ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={
            connectedUser.name ? <Navigate replace to="/" /> : <Register />
          }
        />
        <Route path="/editAccount" element={<EditAccount />} />
        <Route path="/myAccount/:user" />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(mapStateToProps)(App);
