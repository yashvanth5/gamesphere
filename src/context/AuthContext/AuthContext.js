import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
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

  const [showPassword, setShowPassword] = useState({
    login: false,
    signUp: false,
    signUpConfirm: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const userToken = JSON.parse(localStorage.getItem("token"));

  // console.log(userToken)
  const [token, setToken] = useState(userToken?.token);
  const [currentUser, setCurrentUser] = useState(
    userToken?.user
    //  || {}
  );

  const toggleLoginPassword = () => {
    setShowPassword({ ...showPassword, login: !showPassword.login });
  };

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

      toast.success("Successfully signed in!");

      navigate(location?.state?.from?.pathname ?? "/");
      // setLoginInput({
      //   email: "",
      //   password: "",
      // });
    } catch (error) {
      const { response } = error;
      if (response.status === 401) {
        toast.error("Invalid password! Please try again!");
      } else if (response.status === 404) {
        toast.error("Credentials not found! Please signup before logging in!");
      } else {
        console.error(error);
        toast.error("Unable to sign in!");
      }
    }
  };

  const toggleSignUpPassword = () => {
    setShowPassword({ ...showPassword, signUp: !showPassword.signUp });
  };
  const toggleSignUpConfirmPassword = () => {
    setShowPassword({
      ...showPassword,
      signUpConfirm: !showPassword.signUpConfirm,
    });
  };

  const signupHandler = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Password fields are not matching!");
      navigate("/signup");
    } else {
      try {
        const response = await axios.post(`/api/auth/signup`, {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          firstName: firstName,
          lastName: lastName,
        });
        // console.log(response);
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

        toast.success("Successfully signed up! Kindly login to continue!");
        navigate(location?.state?.from?.pathname ?? "/login");
      } catch (error) {
        const { response } = error;
        if (response.status === 422) {
          toast.error(
            "User email already exists! Please try signing up with another email!"
          );
        } else {
          console.error(error);
          toast.error("Unable to sign up!");
        }
      }
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setCurrentUser(null);
    localStorage.removeItem("token");
    navigate(location?.state?.from?.pathname ?? "/");
    toast.success("Logged out successfully!");
  };

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
          showPassword,
          toggleLoginPassword,
          toggleSignUpPassword,
          toggleSignUpConfirmPassword,
          currentUser,

          token,
          logoutHandler,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
