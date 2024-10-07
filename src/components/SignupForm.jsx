import { useState } from "react";

function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    return (
        <>
          <div className="flex flex-row w-full h-screen">
            <div className="flex-1 hidden sm:flex">
              <img
                src="./assets/2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center items-center bg-white gap-10 w-full">
              <h1 className="text-black text-4xl font-semibold">Welcome! </h1>
              <button className="btn flex flex-row bg-transparent border-none text-white rounded p-0.5 md:justify-start md:bg-blue-500">
          <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="" className="bg-white w-2.5/12 h-full object-contain"/>
          <span className="text-base px-2 hidden md:block">
          Continue with Google
          </span>
          <span className="text-black md:hidden">
          Sign Up
          </span>
          </button>
          <h1 className="text-black">or</h1>
              <form
                action="submit"
                method="post"
                className="text-black flex flex-col gap-10 w-full items-center"
              >
                <label className="input rounded flex items-center gap-2 bg-white w-4/6 border-customYellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow" placeholder="Please Enter your email here..." />
                </label>
    
                <label className="input rounded flex items-center gap-2 bg-white w-4/6 border-customYellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* <input type="password" className="grow" value="password" /> */}
                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow"
                    value={password}
                    placeholder="********"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm text-black-700 hover:font-semibold focus:outline-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </label>
                <button className="btn bg-customGreen text-customYellow w-4/6 rounded">Sign Up</button>
              </form>
              <div className="text-black flex flex-row w-full justify-evenly">
                <a href="/login">
                <button className="btn btn-ghost">Already have an account?</button>
                </a>
                <a href="#">
                <button className="btn btn-ghost">Forgot Password</button>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
    

export default SignupForm