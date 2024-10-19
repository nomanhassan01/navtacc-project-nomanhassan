import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const [info, setInfo] = useState({
    username: "",
    password: ""
  })
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    axios.post("http://localhost:4000/api/auth/login", info)
      .then((response) => {
        alert(response.data.message)
        const { username, email } = response.data.loginUser
        const { token } = response.data
        window.localStorage.setItem("username", username)
        window.localStorage.setItem("email", email)
        window.localStorage.setItem("token", token)
        setUser({ username, email, token })
        navigate("/")
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  return (
    <>
      <section className="bg-gray-300 text-gray-900 body-font relative min-h-screen flex items-center justify-center">
        <div className="container px-5 py-12 mx-auto">
          <form onSubmit={handleLogin} className="lg:w-1/3 md:w-1/2 bg-gray-500 rounded-lg p-8 flex flex-col mx-auto w-full shadow-lg rounded border border-yellow-500 ">
            <h2 className="text-gray-900 text-lg font-bold title-font mb-5 text-center">Login</h2>

            <div className="relative mb-6">
              <label htmlFor="username" className="leading-7 text-sm text-black">Username</label>
              <input
                value={info.username}
                onChange={handleInfo}
                type="text"
                id="username"
                name="username"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label htmlFor="password" className="leading-7 text-sm text-black">Password</label>
              <input
                value={info.password}
                onChange={handleInfo}
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="text-center">
              <button className="text-white bg-gray-800  border border-yellow-500 bg-gold hover:bg-yellow-500 hover:text-black rounded-lg py-2 px-8 font-bold focus:outline-none transition-colors duration-200">
                Login
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/register" className="text-gray-200 hover:text-yellow-500">Don't have an account? Register</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
