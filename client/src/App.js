import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState({})

  const handletSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/users/register', user).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setUser({ ...user, avatar: e.target.files[0].name })} />
        <button type="submit">Kirim</button>
      </form>
    </div>
  )
}

export default App
