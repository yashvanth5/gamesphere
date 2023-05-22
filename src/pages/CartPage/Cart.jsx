import { useContext } from "react"
import "./Cart.css"
import { CartContext } from "../../context/CartContext/CartContext"


export const Cart =()=>{
const {cart} = useContext(CartContext)
// console.log(cart)

    return(
        <>
{/* {cart?.Map(())} */}
        </>
    )
}