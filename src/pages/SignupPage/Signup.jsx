import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const Signup = () => {
  const { signupInput, setSignupInput, signupHandler } =
    useContext(AuthContext);

  const signupInputHandler = (e) => {
    const { name, value } = e.target;
    setSignupInput({ ...signupInput, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signupHandler(signupInput);
  };

  return (
    <>
      <div>
        <div>
          <h1>Sign Up</h1>
          <p>
            Looks like you're new here! Sign up with your email to get started
          </p>
        </div>
        <div>
          <form onSubmit={handleSignupSubmit}>
            <p>
              <label htmlFor="email"> Enter your email * </label>
              <input
                onChange={signupInputHandler}
                type="email"
                value={signupInput.email}
                name="email"
                placeholder="Email"
              />
            </p>

            <p>
              <label htmlFor="firstName"> Enter your Firstname *</label>
              <input
                type="text"
                onChange={signupInputHandler}
                value={signupInput.firstName}
                name="firstName"
                placeholder="First Name"
              />
            </p>

            <p>
              <label htmlFor="lastName"> Enter your Lastname * </label>
              <input
                type="text"
                onChange={signupInputHandler}
                value={signupInput.lastName}
                name="lastName"
                placeholder="Last Name"
              />
            </p>

            <p>
              <label htmlFor="password">Enter your new password *</label>
              <input
                type="password"
                onChange={signupInputHandler}
                value={signupInput.password}
                name="password"
                placeholder="New Password"
              />
            </p>
            <p>
              <label htmlFor="password">Re-enter your new password *</label>
              <input
                type="password"
                onChange={signupInputHandler}
                value={signupInput.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </p>

            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
};
