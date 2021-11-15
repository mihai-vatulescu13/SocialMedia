import { useState, useEffect } from "react";

//add the style for this component later on:
export default function Login() {

  const [users, setUsers] = useState([])
  const [userExist, setUserExist] = useState(true);
  //this hook needs to be exported to the context:
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/user/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  //create here a generic function that collects data form the fields: 
  const onInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    const { email, password } = userData;

    const selectedUser = users.find(item => item.email === email);

    if (!selectedUser) {
      setUserExist(false);
      return console.error('the user was not found');
    }

    if (selectedUser.email === email && selectedUser.password === password) {
      console.log('the credentials are correct');

      //reset the user status message:
      setUserExist(true);
    } else {
      console.log('try again');
    }
  }


  return (
    <div className="login-container">
      <h1>Login page</h1>
      <div className="login-form-container">
        <form
          action="submit"
          className="login-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-fields">
            <label>
              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={e => onInputChange(e)}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={e => onInputChange(e)}
              />
            </label>
          </div>
          <div className="form-buttons">
            <div className="login-btn">
              <button
                className="login-btn"
                onClick={(event) => handleSubmit(event)}
              >
                Login
              </button>
            </div>
          </div>
          {/* show here user status existence: */}
          {
            userExist ? <p></p> : <p>The user was not found</p>
          }
        </form>
      </div>
    </div>
  )
}