import './App.css'
import { Otp } from './pages/otp/Otp'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <Routes>
      
      <Route path="/" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/verify-otp" element={<Otp/>} />
     </Routes>
  )
}

export default App
