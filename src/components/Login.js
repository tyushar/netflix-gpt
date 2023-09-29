import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidate } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignForm, setisSignForm] = useState(true);

  const [errormessage, SetErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //  Validate the form data

    const message = checkValidate(email.current.value, password.current.value);
    SetErrorMessage(message);
    if (message) return;

    // Sign/SignUp logic

    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signup
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + errorMessage);
        });
    }
  };

  const isToogleIn = () => {
    setisSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute  bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90"
      >
        <h1 className="font-bold mb-10 text-3xl">
          {' '}
          {isSignForm ? 'Sign In' : 'Sign Up'}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 rounded w-full align-center bg-gray-700"
        />
        {!isSignForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-2 rounded w-full align-center bg-gray-700"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded w-full bg-gray-700 "
        />
        <p className="text-red-500">{errormessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6  bg-red-700 rounded align-center w-full"
        >
          {isSignForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={isToogleIn}>
          {isSignForm
            ? 'New to Netflix? Sign Up Now'
            : 'Already a User? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
