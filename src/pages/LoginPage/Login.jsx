import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import "./Login.css";
import { Footer } from "../../components/Footer/Footer";

export const Login = () => {
  const { loginInput, setLoginInput, loginHandler } = useContext(AuthContext);

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const guestUserDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginInput);
  };

  return (
    <>
      <div className="login-page">
        <h2 className="login-heading">Login</h2>

        <div>
          <form onSubmit={handleLoginSubmit}>
            <p>
              <label htmlFor="email"> Enter your email </label>
              <input
                className="login-input"
                onChange={loginInputHandler}
                type="email"
                autoComplete="on"
                value={loginInput.email}
                name="email"
                placeholder="Email"
              />
            </p>

            <p>
              <label htmlFor="password">Enter your password</label>
              <input
                className="login-input"
                onChange={loginInputHandler}
                type="password"
                name="password"
                value={loginInput.password}
                placeholder="********"
              />
            </p>
            {/* <Link>Forgot Password?</Link> */}
            <div>
              <button type="submit" className="login-btn login-btn-login">
                Login
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="login-btn login-btn-test"
                onClick={() => setLoginInput(guestUserDetails)}
              >
                Login with Test Credentials
              </button>
            </div>
            <p className="login-btn-new-acc">
              Don't have an account?{" "}
              <Link className="signup-link" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
