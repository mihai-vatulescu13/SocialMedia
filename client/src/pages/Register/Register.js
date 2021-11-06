import { useState } from "react";
import './register.css';

//add the style for this component later on:
export default function Register() {
  const [isEmptyFields, setIsEmptyFields] = useState(false);
  const [isDataSent, setIsDataSent] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  //create here a generic function that collects data form the fields: 
  const onInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  const registerClick = () => {
    const { name, email, password } = userData;

    //validate the input from the user:
    if (name === "" || email === "" || password === "") {
      setIsEmptyFields(true);
      setIsDataSent(false);
      return console.error('the fields must not be empty')
    }

    if (!email.includes('@')) {
      setIsValidEmail(false);
      return console.error('invalid email')
    }

    //send data to the API trough the http POST request:
    fetch('http://localhost:5000/api/auth/register', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        following: [],//persons that the user follow
        follwed: [],//persons that follow the user
        news: [],//used to store notifications/news
        stories: []
      })
    })
      .then(res => res.json())
      .then(() => {
        setUserData({
          name: '',
          email: '',
          password: ''
        })
        setIsDataSent(true)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="register-container">
      <h1>Register page</h1>
      <div className="register-form-container">
        <form
          action="submit"
          className="register-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-fields">
            <label className="form-label">
              Name:
              <input
                type="text"
                name="name"
                placeholder="username"
                className="form-input"
                onChange={e => onInputChange(e)}
              />
            </label>
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-input"
                onChange={e => onInputChange(e)}
              />
            </label>
            <label className="form-label">
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                className="form-input"
                onChange={e => onInputChange(e)}
              />
            </label>
          </div>
          <div className="form-buttons">
            <div className="submit-btn">
              <button
                className="submit"
                type="submit"
                onClick={() => registerClick()}
              >
                Register
              </button>
            </div>
          </div>
          {
            !isEmptyFields ? <p></p> : <p>the fields must not be empty</p>
          }
          {
            isDataSent ? <p>account created</p> : <></>
          }
          {
            isValidEmail ? <p></p> : <p>invalid email</p>
          }
        </form>
      </div>
    </div>
  );
}