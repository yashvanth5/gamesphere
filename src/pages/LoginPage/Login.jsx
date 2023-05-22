import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext/AuthContext"
import { useContext } from "react"

export const Login = ()=>{
    const { loginInput,setLoginInput, loginHandler} = useContext(AuthContext)

const loginInputHandler=(e)=>{
    const {name,value} = e.target;
setLoginInput({...loginInput,[name] : value})
}

    return(
        <>
        <div>
            <div>
       <h1>Sign In</h1>
       <p> Get Access To Your Cart, Wishlist And Orders</p>
            </div>
            <div>
                <form>
<p>
<label htmlFor="email"  > Enter your email </label>
                   <input onChange={loginInputHandler} type="email" value={loginInput.email}  name="email" placeholder="Email" />
</p>
                
                  <p>
                  <label htmlFor="password">Enter your password</label>
<input  onChange={loginInputHandler}  type="password" name="password" value={loginInput.password}  placeholder="Password"  />
                  </p> 
                  <Link>Forgot Password?</Link>
                  
                  <button onClick={loginHandler} type="submit">Sign In</button>
                  <button type="submit">Test User</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

            </div>
        </div>
        </>
    )
}