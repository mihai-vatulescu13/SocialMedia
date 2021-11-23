import {useEffect, useState } from "react"
import axios from "axios";

export default function Search() {
  const [searchPayload,setSearchPayload] = useState('');
  const [users,setUsers] = useState([])

  useEffect(()=>{
   const fetchData = async () =>{
    const response = await axios.get('/user/users/');
    setUsers(response.data);
   }
   fetchData();
  },[])

  const onSearchChange = (e) =>{
   setSearchPayload(e.target.value); 
  }

  return (
    <div className="search-box">
      <input
        type="search"
        name="search"
        placeholder="search users"
        onChange={(e) => {
          onSearchChange(e)
        }}
      />
      {
       searchPayload.length > 0 ?
        <div>
          <h3>Show users</h3>
        </div> : <></>
      }
    </div>
  )
}