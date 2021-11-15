export default function EditAccount() {

  // const onEditInput = (event) => {
  //   setCurrentUserData({ ...currentUserData, [event.target.name]: event.target.value });
  // }


  // const editClick = () => {
  //   const { name, email, city, password } = currentUserData;
  //   console.log('user city:', city);

  //   //send data to the API trough the http POST request:
  //   fetch(`http://localhost:2000/users/${id}`, {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       city,
  //       password,
  //       following: [],//persons that the user follow
  //       follwed: [],//persons that follow the user
  //       news: [],//used to store notifications/news
  //       stories: []
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(() => {
  //       console.log('data updated with success');
  //     })
  //     .catch(err => console.log(err))
  // }


  return (
    <div className="account-container">
      <h2>Edit account</h2>
      <form
        action="submit"
        className="edit-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-fields">
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              //placeholder={name}
              className="form-input"
            //onChange={e => onEditInput(e)}
            />
          </label>
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              //placeholder={email}
              className="form-input"
            //onChange={e => onEditInput(e)}
            />
          </label>
          <label className="form-label">
            City:
            <input
              type="text"
              name="city"
              //placeholder={city}
              className="form-input"
            //onChange={e => onEditInput(e)}
            />
          </label>
          <label className="form-label">
            Password:
            <input
              type="password"
              name="password"
              //placeholder="password"
              className="form-input"
            //onChange={e => onEditInput(e)}
            />
          </label>
        </div>
        <div className="form-buttons">
          <div className="submit-btn">
            <button
              className="submit"
              type="submit"
            // onClick={() => editClick()}
            >
              Edit
            </button>
          </div>
        </div>

      </form>

      <div className="sign-out-button-box">
        {/* <button onClick={() => setIsConnected(false)}>
          Sign out
        </button> */}
      </div>
    </div>
  )
}