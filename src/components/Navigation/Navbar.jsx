import { Link } from "react-router-dom"

import "./Navbar.css";
export const Navbar = ()=>{
    return(
        <>
        <div className="navbar">
            {/* <div className="nav-links"> */}
           
            <div className="left-side-nav">
            <nav>
               
<Link  to="/"  className="nav-brand">GAMESPHERE</Link>
</nav>
</div>
           
                

                
            
              
                   
                    <div className="right-side-nav">

                   
                    <nav  >

                        <ul className="right-nav-links">
                            <li >  <Link to="/search" className=" navlinks-decoration nav-search">Search</Link></li>
                            <li>  <Link className=" navlinks-decoration nav-login" > Login</Link></li>
                            <li> <Link to="/shop"  className=" navlinks-decoration nav-shop" > Shop</Link></li>
                            <li>  <Link className=" navlinks-decoration nav-wishlist"> Wishlist</Link></li>
                            <li>    <Link className=" navlinks-decoration nav-cart">Cart</Link></li>

                        </ul>
                       

                   
                      
                 
                    </nav>
                    </div>
                    
                
                    
               



            {/* </div> */}



        </div>
        </>
    )
}