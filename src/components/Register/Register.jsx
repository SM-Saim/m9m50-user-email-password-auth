import React from "react";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <h2>Please register</h2>
      <form onSubmit={handleRegister} className="bg-slate-200 p-5 text-center ">
        <input
          className="mb-5 w-2/5 text-xl py-2 pl-1 rounded-md"
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
        />
        <br />
        <input
          className="mb-5 w-2/5 text-xl py-2 pl-1 rounded-md"
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
        />
        <br />
        <input
          className="btn btn-secondary w-2/5"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
