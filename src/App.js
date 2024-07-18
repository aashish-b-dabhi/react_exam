import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import User from './components/User/User'


const App = () => {

  let role = "admin"

  if (role == "admin") {
    return (
      <Routes>
        <Route path='/' element={<Admin />} />
      </Routes>
    )
  }
  else if (role == "user") {
    return (
      <Routes>
        <Route path='/' element={<User />} />
      </Routes>
    )
  }
  else{
    return <h1>404 not found</h1>
  }
}

export default App