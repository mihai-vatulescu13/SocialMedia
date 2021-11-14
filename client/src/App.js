import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import EditAccount from "./pages/EditAccount/EditAccount"
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function App({ connectedUser }) {
  const user = false;

  return (
    <div className="App">
      <h1>Welcome to social you!</h1>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editAccount" element={<EditAccount />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.LoginReducer
  }
}

export default connect(mapStateToProps)(App);
