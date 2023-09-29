import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebase";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error
    setRegisterError("");
    // reset success
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 or more character");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
        setSuccess("User successfully created");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl text-slate-500 m-4 font-semibold">
        Please register
      </h2>
      <form onSubmit={handleRegister} className="bg-slate-200 p-5 text-center ">
        <input
          className="mb-5 w-2/5 text-xl py-2 pl-1 rounded-md"
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
          required
        />
        <br />
        <input
          className="mb-5 w-2/5 text-xl py-2 pl-1 rounded-md"
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
          required
        />
        <br />
        <input
          className="btn btn-secondary w-2/5"
          type="submit"
          value="Register"
        />
      </form>

      {registerError && (
        <p className="text-red-500 font-semibold m-5">{registerError}</p>
      )}
      {success && <p className="text-green-500 font-semibold m-5">{success}</p>}
    </div>
  );
};

export default Register;
