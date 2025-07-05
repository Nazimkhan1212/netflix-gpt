import { useState } from "react";
import Header from "./Header";

const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }
    return(
        <div>
            <Header/>
            <div  className="absolute">
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg' alt="logo" />
            </div>
            <form className="absolute bg-black p-8 w-3/12 my-36 mx-auto text-white left-0 right-0 rounded-lg bg-opacity-80" >
                <h1 className="text-2xl font-bold py-4" >{isSignIn ? "Sign In":"Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className="p-2 my-2 border w-full  bg-gray-800"  />}
                <input type="email" placeholder="Email Address" className="p-2 my-2 border w-full  bg-gray-800"  />
                <input type="password" placeholder="Password" className="p-2 my-2 border w-full  bg-gray-800"  />
                <button  className="p-3 my-2 border bg-red-700 w-full rounded-lg " >{isSignIn ? "Sign In":"Sign Up"}</button>
                <p onClick={toggleSignInForm} className="py-3 cursor-pointer ">{isSignIn?"New to Netflix? Sign Up Now":"Already a User? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login;