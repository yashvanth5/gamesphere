import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [loginInput,setLoginInput] = useState({email : "" , password : ""})
const [signupInput,setSignupInput] = useState({
firstName : "",
lastName : "",
email : "",
password : "",
confirmPassword : ""



 })

//  console.log(loginInput)

const userToken = localStorage.getItem("token")
console.log(userToken)

const loginHandler = async(e)=>{
    e.preventDefault();
try{
    const {data} = await axios.post(`/api/auth/login`,loginInput);
    localStorage.setItem("token", JSON.stringify(data.encodedToken));
    console.log(  data.encodedToken);
    setLoginInput(
        {
            email : "" , 
        password : ""
    }

    )
}
catch(error){
    console.error(error)
}


}



const signupHandler = async(e)=>{
    e.preventDefault();
    try{
        
        const {data} = await axios.post(`/api/auth/signup` , signupInput   )
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        console.log(  JSON.stringify(data.encodedToken))
      setSignupInput(
        {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            confirmPassword : ""
            
             }
      )
    }
    catch(error){
        console.error(error)
    }
} 

    return(
        <>
        <AuthContext.Provider value={{  loginInput,setLoginInput, signupInput,setSignupInput, loginHandler ,signupHandler}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}