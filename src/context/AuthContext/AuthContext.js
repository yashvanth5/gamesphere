import axios from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const userToken = JSON.parse(localStorage.getItem("token"));

  // console.log(userToken)
  const [token, setToken] = useState(userToken?.token);
  const [currentUser, setCurrentUser] = useState(
    userToken?.user
    //  || {}
  );

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });

      const {
        data: { foundUser, encodedToken },
      } = response;
      if (response.status === 200) {
        localStorage.setItem(
          "token",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
      }

      setToken(encodedToken);
      setCurrentUser(foundUser);
      // console.log("toekn from foundUser ", foundUser);
      // console.log("toekn from aaa ", encodedToken);

      // setIsLoggedIn(true);

      navigate(location?.state?.from?.pathname ?? "/store");
      // setLoginInput({
      //   email: "",
      //   password: "",
      // });
    } catch (error) {
      console.error(error);
    }
  };

  const signupHandler = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName: lastName,
      });
      console.log(response);
      const {
        data: { createdUser, encodedToken },
      } = response;

      if (response.status === 201) {
        localStorage.setItem(
          "token",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
      }

      setToken(encodedToken);
      setCurrentUser(createdUser);

      // setIsLoggedIn(true);

      navigate(location?.state?.from?.pathname ?? "/store");
    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setCurrentUser(null);
    localStorage.removeItem("token");
    navigate(location?.state?.from?.pathname ?? "/");
  };
  // const userLoginHandler = () => {
  //   setIsLoggedIn(!isLoggedIn);
  //   navigate(location?.state?.from?.pathname);
  // };

  return (
    <>
      <AuthContext.Provider
        value={{
          loginInput,
          setLoginInput,
          signupInput,
          setSignupInput,
          loginHandler,
          signupHandler,
          userToken,
          // userLoginHandler,
          currentUser,
          isLoggedIn,
          token,
          logoutHandler,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
