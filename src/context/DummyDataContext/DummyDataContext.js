import { createContext, useEffect, useState } from "react"

export const DummyDataContext = createContext()

export const DummyDataProvider = ({children})=>{
const [getData,setGetData] = useState([])
const fetchCall = async()=>{
    try{
const response = await fetch ( "/api/products"  )

const data = await response.json()
setGetData (data.products)

    }
    catch(e){
        console.error(e)
    }
}


useEffect(()=>{
    fetchCall()
},[])

// console.log(getData)
    return(
        <>
        <DummyDataContext.Provider value={{getData}}>
{children}
        </DummyDataContext.Provider>
        
        </>
    )
}