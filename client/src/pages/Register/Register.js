<<<<<<< HEAD
import { useState } from "react";
import axios from 'axios'
=======
import { useState, useRef } from "react";
import NavBar from "../../components/navbar/NavBar";
>>>>>>> auth-redux
import './register.css';
import { connect } from "react-redux";
// import { registerAction } from "../../actions/actions"
import { Auth } from "../../actions/actions";


const Register = ({ registerUser }) => {
  const [isDataSent, setIsDataSent] = useState(false);

  const userData = {
    name: useRef(),
    email: useRef(),
    password: useRef()
  }

<<<<<<< HEAD
  const registerClick = async () => {
=======
  const onRegisterUser = (e) => {
    e.preventDefault();
>>>>>>> auth-redux
    const { name, email, password } = userData;
    
    //pass user data to the dispatch and then to the action:
    registerUser({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    })

    name.current.value = '';
    email.current.value = '';
    password.current.value = '';

<<<<<<< HEAD
    //send data to the API trough the http POST request:
    // fetch('http://localhost:5000/api/auth/register', {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //     following: [],//persons that the user follow
    //     follwed: [],//persons that follow the user
    //     news: [],//used to store notifications/news
    //     stories: []
    //   })
    // })
    //   .then(res => res.json())
    //   .then(() => {
    //     setUserData({
    //       name: '',
    //       email: '',
    //       password: ''
    //     })
    //     setIsDataSent(true)
    //   })
    //   .catch(err => console.log(err))
    try{
      const res = await axios.post('auth/register',
      {   
        name,
        email,
        password
     })
      console.log('baaa',res.data)
       setIsDataSent(true)
    }catch(err){
      console.log(err)
    }
=======
    setIsDataSent(true);
>>>>>>> auth-redux
  }

  return (
    <div className="register-container">
      <h1>Register page</h1>
      <NavBar />
      <div className="register-form-container">
        <form
          action="submit"
          className="register-form"
          onSubmit={onRegisterUser}
        >
          <div className="form-fields">
            <label className="form-label">
              Name:
              <input
                type="text"
                name="name"
                placeholder="username"
                className="form-input"
                required
                ref={userData.name}
              />
            </label>
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-input"
                required
                ref={userData.email}
              />
            </label>
            <label className="form-label">
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                className="form-input"
                required
                ref={userData.password}
              />
            </label>
          </div>
          <div className="form-buttons">
            <div className="submit-btn">
              <button
                className="submit"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}


const dispatchActions = (dispatch) => {
  //dispatch registerUser function to the reducer:
  return {
    registerUser: (userData) => {
      return dispatch(Auth(userData))
    }
  }
}

export default connect(null, dispatchActions)(Register);