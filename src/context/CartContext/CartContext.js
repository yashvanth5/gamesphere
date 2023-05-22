import { createContext, useContext, useReducer, useState } from "react";
// import { ProductListingContext } from "../ProductListingContext/ProductListingContext";


const cartReducer=(state,action)=>{
    switch(action.type) {
        case "Add_To_Cart" : {
            // return {...state, cart :  {...state , cart :action.payload }}
        }

        default :
            return state
        
    }
}

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    // const {getProductData} = useContext(ProductListingContext)

    const initialValue =  {
      cart:[]
    
    }
    
    const [ state,dispatch] = useReducer(cartReducer,initialValue)

    // const [cart,setCart] = useState([])
// setCart((cart)=>[ ...cart,game])

    const itemsAddHandler=(game)=>{
        const addedGame = state.cart.find(({_id})=> _id ===game._id)
        if(!addedGame){
            dispatch({type:"Add_To_Cart" , payload:game})
        }
       
        
    }

    console.log(state.cart)
    return(
         <>
        <CartContext.Provider  value={{itemsAddHandler}}>
        {children}
        </CartContext.Provider>
        
        </>
    )
}