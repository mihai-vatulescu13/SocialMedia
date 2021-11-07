import { useState } from "react"

export default function Search() {
  const [searchPayload, setSearchPayload] = useState('');

  const getSearchPayload = (event) => {
    let payload = event.target.value;
    console.log('search payload:', payload)
    setSearchPayload(payload);
  }

  return (
    <div className="search-box">
      <input
        type="search"
        name="search"
        id=""
        placeholder="search"
        onChange={(e) => {
          getSearchPayload(e)
        }}
      />
    </div>
  )
}