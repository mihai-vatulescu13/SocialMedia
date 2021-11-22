import { useRef, useEffect, useState } from "react"
import axios from "axios";

export default function Search() {
  const searchPayload = useRef();
  const [users,setUsers] = useState([])

  useEffect(()=>{
   const fetchData = async () =>{
    const response = await axios.get('/user/users/');
    console.log('all received users:',response.data);
   }
   fetchData();
  },[])

  return (
    <div className="search-box">
      <input
        type="search"
        name="search"
        ref={searchPayload}
        placeholder="search users"
        onChange={(e) => {
          console.log(searchPayload.current.value)
        }}
      />
    </div>
  )
}