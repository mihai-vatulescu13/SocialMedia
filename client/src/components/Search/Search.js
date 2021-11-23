import { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";

export default function Search() {
  const [searchPayload, setSearchPayload] = useState("");
  const [users, setUsers] = useState([]);

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
        placeholder="search users"
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
                <div key={index} className="user-search-card">
                  <h5>{user.name}</h5>
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
