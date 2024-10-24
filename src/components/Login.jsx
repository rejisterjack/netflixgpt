import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const toggleForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="relative h-screen w-full">
      <Header />

      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
        alt="Netflix background"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <form className="bg-black bg-opacity-75 p-8 rounded-md max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-8">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 mb-4 text-white bg-gray-700 rounded-sm focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 text-white bg-gray-700 rounded-sm focus:outline-none"
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 text-white bg-gray-700 rounded-sm focus:outline-none"
            />
          )}
          <button
            className="w-full bg-red-600 py-3 text-white font-semibold rounded-sm hover:bg-red-700 transition"
            type="submit"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {isSignIn && (
            <div className="flex justify-between text-sm text-gray-400 mt-4">
              <label>
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="https://google.com" className="hover:underline">
                Need help?
              </a>
            </div>
          )}

          <div className="text-center text-gray-400 mt-8">
            {isSignIn ? (
              <>
                New to Netflix?{" "}
                <p
                  className="text-white hover:underline inline"
                  onClick={toggleForm}
                >
                  Sign up now.
                </p>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <p
                  className="text-white hover:underline inline"
                  onClick={toggleForm}
                >
                  Sign in now.
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
