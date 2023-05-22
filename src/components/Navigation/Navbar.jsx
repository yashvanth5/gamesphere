import { Link } from "react-router-dom"
import { AiOutlineSearch} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBag} from "react-icons/bs";
import { BiHeart} from "react-icons/bi";
import { IoMdCart } from 'react-icons/io';

import "./Navbar.css";
import { useContext,  useState } from "react";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";


// const reducer = (state,action) =>{
//     switch (action.type) {
//         case "Search_All" : {
//             return {...state,allData : action.data}
//         }

//         case "Search_Game" : {
//             return {...state, allData : state.allData.filter(({title})=> title.toLowerCase().includes(action.payload.trim().toLowerCase()))}
//         }

//         default : 
//         return state;
//     }
// }





export const Navbar = ()=>{
    const [searchBtn,setSearchBtn] = useState(false)
    const [searchTxt,setSearchTxt] = useState("")

    const {dispatch} = useContext(ProductListingContext)
    const {getProductData} = useContext(ProductListingContext)

   
   
    
    const inputHandler=()=>{
if(searchTxt===""){
    dispatch({type:"Search_All" ,data : getProductData})
} else{
    dispatch({type:"Search_Game" , payload : searchTxt})
}

       
    }
    return(
        <>
        <div className="navbar">
            {/* <div className="nav-links"> */}
           
            <div className="left-side-nav">
            <nav>
               
<Link  to="/"  className="nav-brand">GAMESPHERE</Link>
</nav>
</div>
           
           <div >
            {searchBtn && 
              
           <input  value={searchTxt} onChange={(e)=>{
             setSearchTxt(e.target.value);
            inputHandler();
        }} className="searchbar " type="text"  placeholder=" Search for any game here..."/>
               
                
                }

           </div>
                

                
            
              
                   
                    <div className="right-side-nav">

                    
                    <nav  >
                    

                        <ul className="right-nav-links">
                            <li onClick={()=>setSearchBtn(!searchBtn)} >  <Link 
                            // to="/search"
                             className=" navlinks-decoration nav-search"> <AiOutlineSearch style={{ margin: "-5px",fontSize:"26px" }} /></Link></li>
                            
                            <li> <Link to="/store"  className=" navlinks-decoration nav-store" >  <BsBag style={{ margin: "-5px",fontSize:"24px" }} /></Link></li>
                            <li>  <Link className=" navlinks-decoration nav-wishlist">     <BiHeart style={{ margin: "-5px",fontSize:"26px" }}  /></Link></li>
                           
                           <li>  <Link to="/cart" className=" navlinks-decoration nav-cart">  <IoMdCart style={{ margin: "-5px",fontSize:"24px" }}  /></Link></li>
  
                           <li>  <Link to="/login" className="navlinks-decoration nav-login" >  <FaRegUserCircle style={{margin: "-5px",fontSize:"24px" }}  /></Link></li> 
                        </ul>
                       

                   
                      
                 
                    </nav>
                    </div>
                    
                
                    
               



            {/* </div> */}



        </div>
        </>
    )
}