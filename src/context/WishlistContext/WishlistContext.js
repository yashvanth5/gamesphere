import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

export const WishlistContext = createContext()

const wishlistReducer=(state,action)=>{
    switch(action.type){
        case "Display_Wishlist" : {
            return {...state,wishlist:action.payload}
        }

        case "Add_To_Wishlist" : {
            return  {...state,wishlist:action.payload}
        }
        
        case "Remove_From_Wishlist" : {
            return {...state,wishlist:action.payload}
        }

        default :
        return state
    }
}

export const WishlistProvider = ({children})=>{
const {userToken} = useContext(AuthContext)

const initialWishlistState = {
    wishlist:[]
}

const [wishlistState,wishlistDispatch] = useReducer(wishlistReducer,initialWishlistState)

    const getWishlist = async()=>{
        try{
const response = await axios.get("/api/user/wishlist" , {headers : {authorization : userToken }})
if(response.status===200){
    wishlistDispatch({type:"Display_Wishlist" ,payload : response.data.wishlist})
}

        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        getWishlist()
    },[])


    const addToWishlist= async(game)=>{
        try{
const response = await axios.post("/api/user/wishlist"  , {product : game} , {headers : {authorization : userToken }} )
if(response.status===201){
    wishlistDispatch({type:"Add_To_Wishlist" , payload : response.data.wishlist})
}

        }
        catch(e){
            console.error(e)
        }

    }

    const removeFromWishlist = async(game) => {
        try{
const response = await axios.delete(`/api/user/wishlist/${game._id}` , {headers : {authorization: userToken}}   )

if(response.status===200){
    wishlistDispatch({type:"Remove_From_Wishlist" , payload : response.data.wishlist})
}

        }
        catch(e){
            console.error(e)
        }
    }
    return(
        <WishlistContext.Provider value={{wishlistState,addToWishlist,removeFromWishlist}}>
 {children}
        </WishlistContext.Provider>
       
        
    )
}