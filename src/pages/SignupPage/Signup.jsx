import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import "./Signup.css";
import { Footer } from "../../components/Footer/Footer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const Signup = () => {
  const {
    signupInput,
    setSignupInput,
    signupHandler,
    showPassword: { signUp, signUpConfirm },
    toggleSignUpPassword,
    toggleSignUpConfirmPassword,
  } = useContext(AuthContext);

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
      <div className="signup-page">
        <h2 className="signup-heading">Sign Up</h2>

        <div>
          <form onSubmit={handleSignupSubmit}>
            <p>
              <label htmlFor="email"> Enter your email * </label>
              <input
                onChange={signupInputHandler}
                type="email"
                className="signup-input"
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
                className="signup-input"
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
                className="signup-input"
                value={signupInput.lastName}
                name="lastName"
                placeholder="Last Name"
              />
            </p>

            <p>
              <label htmlFor="password">
                <p> Enter your new password *</p>
                <input
                  type={signUp ? "text" : "password"}
                  onChange={signupInputHandler}
                  value={signupInput.password}
                  className="signup-input"
                  name="password"
                  placeholder="New Password"
                />
                <div
                  className="signUp-btn-pwd"
                  onClick={() => toggleSignUpPassword()}
                >
                  {signUp ? <VisibilityOffIcon /> : <VisibilityIcon />}{" "}
                </div>
              </label>
            </p>

            <p>
              <label htmlFor="password">
                <p>Re-enter your new password *</p>
                <input
                  type={signUpConfirm ? "text" : "password"}
                  onChange={signupInputHandler}
                  value={signupInput.confirmPassword}
                  className="signup-input"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <div
                  className="signUp-btn-pwd"
                  onClick={() => toggleSignUpConfirmPassword()}
                >
                  {signUpConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}{" "}
                </div>
              </label>
            </p>
            <label className="signUp-label-accept">
              <input type="checkbox" required />
              <h4>I accept terms and conditions</h4>
            </label>

            <button type="submit" className="signup-btn signup-btn-login">
              Sign Up
            </button>
            <p className="signin-btn-have-acc">
              Already have an account?{" "}
              <Link className="login-link" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
