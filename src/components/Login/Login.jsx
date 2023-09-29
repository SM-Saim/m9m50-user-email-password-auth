import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import auth from "../../firebase/firebase";

const Login = () => {
  const handleLogIn = (e) => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    console.log(email, password);

    //add validetion
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

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
