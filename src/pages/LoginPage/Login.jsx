import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext } from "react";

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

  return (
    <>
      <div>
        <div>
          <h1>Sign In</h1>
          <p> Get Access To Your Cart, Wishlist And Orders</p>
        </div>
        <div>
          <form onSubmit={loginHandler}>
            <p>
              <label htmlFor="email"> Enter your email </label>
              <input
                onChange={loginInputHandler}
                type="email"
                value={loginInput.email}
                name="email"
                placeholder="Email"
              />
            </p>

            <p>
              <label htmlFor="password">Enter your password</label>
              <input
                onChange={loginInputHandler}
                type="password"
                name="password"
                value={loginInput.password}
                placeholder="Password"
              />
            </p>
            <Link>Forgot Password?</Link>
            <div>
              <button type="submit">Sign In</button>
            </div>
            <div>
              <button onClick={() => setLoginInput(guestUserDetails)}>
                Test User
              </button>
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};
