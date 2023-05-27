import axios from "axios";
import { createContext, useEffect, useReducer } from "react";


export const CategoryContext = createContext()



const categoryReducer = (state,action)=>{
    switch(action.type){
     case "Display_Categories" : {
        return {...state, categories :action.payload}
     }

     default :
     return state;

    }
   
}



export const CategoryProvider=({children})=>{

    const initialCategoryState = {
        categories:[]
    }
   
const [categoryState,categoryDispatch] = useReducer(categoryReducer,initialCategoryState)


const getCategories = async()=>{
    try{
const response = await axios.get("/api/categories")
if(response.status===200){
categoryDispatch({type:"Display_Categories" , payload : response.data.categories })
}


    }
    catch(e){
        console.error(e)
    }
}

useEffect(()=>{
    getCategories()
},[])



 
    return(
        <CategoryContext.Provider value={{categoryState,categoryDispatch}}>
            {children}
        </CategoryContext.Provider>
       
    )
}