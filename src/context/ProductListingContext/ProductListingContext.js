import { createContext, useEffect, useState } from "react"

export const ProductListingContext = createContext();


export const ProductDataProvider = ({children})=>{

const [getProductData,setGetProductData] = useState([])



const productDataCall = async()=>{
    try{
const response = await fetch( "/api/products" )
const data = await response.json()
setGetProductData(data.products)
    }
    catch(e){
        console.error(e)
    }
}

useEffect(()=>{
    productDataCall()
},[])
console.log(getProductData)
    return(
        <ProductListingContext.Provider value={{getProductData}}>
            {children}
        </ProductListingContext.Provider>
    )
}