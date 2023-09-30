import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebase";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, name, accepted);

    // reset error
    setRegisterError("");
    // reset success
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 or more character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("You should give atleast one upper case in password");
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditions");
      return;
    }
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
        setSuccess("User successfully created");

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated");
          })
          .catch();

        // send verifation email
        sendEmailVerification(result.user)
          .then(() => {
            alert("Please check you email and verify your account");
          })
          .catch((error) => {
            console.log(error);
          });
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
          type="text"
          name="text"
          id=""
          placeholder="Your Name"
          required
        />
        <br />
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
          className="mb-5 w-2/5 text-xl py-2 pl-1 rounded-md  relative"
          type={showPassword ? "text" : "password"}
          name="password"
          id=""
          placeholder="Enter Password"
          required
        />
        <span
          className="absolute ml-[-30px] mt-[13px] text-xl "
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEyeInvisible></AiFillEyeInvisible>
          ) : (
            <AiFillEye></AiFillEye>
          )}
        </span>
        <br />

        <input
          className=" mb-5 ml-[-285px] mr-2"
          type="checkbox"
          name="checkbox"
          id="terms"
        />
        <label htmlFor="terms">
          Accept our <a href="">terms and conditions</a>
        </label>
        <br />

        <input
          className="btn btn-accent w-2/5"
          type="submit"
          value="Register"
        />
        {registerError && (
          <p className="text-red-500 font-semibold m-5">{registerError}</p>
        )}
        {success && (
          <p className="text-green-500 font-semibold m-5">{success}</p>
        )}
        <p>
          Already have an account? Please <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
