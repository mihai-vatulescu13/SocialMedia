import { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchPayload, setSearchPayload] = useState("");
  const [users, setUsers] = useState([]);

  const PF = process.env.REACT_APP_ASSETS;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/user/users/");
      setUsers(response.data);
    };
    fetchData();
  }, []);

  const onSearchChange = (e) => {
    setSearchPayload(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="search"
        name="search"
        placeholder="Search users"
        className="search-users-box"
        onChange={(e) => {
          onSearchChange(e);
        }}
      />

      {searchPayload ? (
        <div className="show-users">
          {users
            .filter((user) =>
              user.name.toLowerCase().includes(searchPayload.toLowerCase())
            )
            .map((user, index) => {
              return (
                <div
                  key={index}
                  className="user-search-card"
                  onClick={() => console.log("user search:", user.name)}
                >
                  <img
                    src={PF + "user-avatar.png"}
                    alt="user avatar"
                    className="user-picture"
                  />
                  <Link to={`/users/${user._id}`} className="username-style">
                    {user.name}
                  </Link>
                </div>
              );
            })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
