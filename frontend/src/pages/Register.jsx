import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    contact: "",
    address: "",
    age: "",
    password: ""
  })

  const navigate = useNavigate()
  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/api/auth/register", info)
      .then((response) => {
        alert("Successfully registered")
        navigate('/login')
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  return (
    <>
      <section className="bg-gray-300 text-gray-900 body-font relative min-h-screen flex items-center justify-center">
        <div className="container px-5 py-12 mx-auto">
          <form onSubmit={handleRegister} className="lg:w-1/3 md:w-1/2 bg-gray-500 rounded-lg p-8 flex flex-col mx-auto w-full shadow-lg rounded border border-yellow-500">
            <h2 className="text-gray-900 text-lg font-bold title-font mb-5 text-center">Register</h2>

            <div className="relative mb-6">
              <label htmlFor="username" className="leading-7 text-sm text-black">Username</label>
              <input
                value={info.username}
                onChange={handleInput}
                type="text"
                id="username"
                name="username"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
              <input
                value={info.email}
                onChange={handleInput}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label htmlFor="contact" className="leading-7 text-sm text-black">Contact</label>
              <input
                value={info.contact}
                onChange={handleInput}
                type="text"
                id="contact"
                name="contact"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label htmlFor="address" className="leading-7 text-sm text-black">Address</label>
              <input
                value={info.address}
                onChange={handleInput}
                type="text"
                id="address"
                name="address"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label htmlFor="age" className="leading-7 text-sm text-black">Age</label>
              <input
                value={info.age}
                onChange={handleInput}
                type="text"
                id="age"
                name="age"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-6">
              <label htmlFor="password" className="leading-7 text-sm text-black">Password</label>
              <input
                value={info.password}
                onChange={handleInput}
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-100 rounded border border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="text-center">
              <button className="text-white bg-gray-800 border border-yellow-500 bg-gold hover:bg-yellow-500 hover:text-black rounded-lg py-2 px-8 font-bold focus:outline-none transition-colors duration-200">
                Register
              </button>
            </div>

            <div className="text-center mt-4">
              <Link to="/login" className="text-gray-200 hover:text-yellow-500">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
