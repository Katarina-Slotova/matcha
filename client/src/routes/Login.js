import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser } from '../reducers/userReducer'
import { useCookies } from 'react-cookie'

const Login = ({ setToken }) => {
  const dispatch = useDispatch()
  const [cookie, setCookie, removeCookie] = useCookies(['user'])
  const [coordinates, setCoordinates] = useState(null)

  const navigate = useNavigate()
  const user = useSelector(({ user }) => user)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoordinates({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          })
        },
        // todo: Handle error with notification or not at all
        (err) => console.log(err)
      )
    }
  }, [])

  const login = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
        coordinates,
      })
      event.target.email.value = ''
      event.target.password.value = ''

      if (response.status === 200) {
        dispatch(initializeUser(response.data.id))
        console.log(`login submit response: ${response}`)
        setCookie('Authorization', response.data.token)
        navigate('/home')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col">
      <div>
        <h1
          className="text-center font-montserrat font-bold leading-tight text-almost-white
		 text-4xl mt-20 mb-20"
        >
          Log in to your account
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <form
          onSubmit={login}
          className="bg-white shadow-sm rounded px-10 pt-10 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block font-montserrat mb-2 text-almost-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="mt-1
					font-montserrat
					block
					w-full
					rounded-md
					border-gray-300
					shadow-sm
					text-gray-700
					focus:border-chitty-chitty focus:ring focus:ring-chitty-chitty focus:ring-opacity-20"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block font-montserrat mb-2 text-almost-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******************"
              className="mt-1
					font-montserrat
					block
					w-full
					rounded-md
					border-gray-300
					shadow-sm
					text-gray-700
					focus:border-chitty-chitty focus:ring focus:ring-chitty-chitty focus:ring-opacity-20"
              required
            />
          </div>

          <div className="flex items-center justify-center mb-5">
            <input
              className="bg-gradient-to-r from-chitty-chitty to-bang-bang hover:bg-gradient-to-l py-2 px-4 rounded focus:outline-none focus:shadow-outline font-montserrat"
              type="submit"
              value="Login"
            />
          </div>
          <hr />
          <div className="flex items-center justify-center mt-5 mb-5">
            <a
              class="inline-block align-baseline font-bold text-sm text-chitty-chitty hover:text-blue-800"
              href="#"
            >
              Forgot password?
            </a>
          </div>
          <hr />
          <div className="flex items-center justify-center mt-5">
            <a
              class="inline-block align-baseline font-bold text-sm text-chitty-chitty hover:text-blue-800"
              href="#"
            >
              Already have an account? Sign in!
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
