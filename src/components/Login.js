import { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(errorCode + '-'+ errorMsg);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMsg = error.message;
    setErrorMessage(errorCode + ''+ errorMsg);
  });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="absolute bg-black p-8 w-3/12 my-36 mx-auto text-white left-0 right-0 rounded-lg bg-opacity-80"
      >
        <h1 className="text-2xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 my-2 border w-full  bg-gray-800"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 border w-full  bg-gray-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-2 border w-full  bg-gray-800"
        />
        <span className="text-red-800 font-bold py-1">{errorMessage}</span>
        <button className="p-3 my-4 border bg-red-700 w-full rounded-lg ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-3 cursor-pointer ">
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
