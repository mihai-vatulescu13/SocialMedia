import { useRef } from 'react';
// import axios from 'axios';

export default function Search() {
  const searchPayload = useRef();
  // const [users, setUsers] = useState([]);
  let searchPayloadLength = 0;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get('/user/users/');
  //     setUsers(response.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="search-box">
      <input
        type="search"
        name="search"
        ref={searchPayload}
        placeholder="search users"
        onChange={(e) => {
          searchPayloadLength = searchPayload.current.value.length;
        }}
      />
      {searchPayloadLength > 0 ? (
        <div>
          <h3>Show users</h3>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
