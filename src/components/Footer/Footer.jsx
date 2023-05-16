import { Link } from "react-router-dom"

import "./Footer.css";

export const Footer=()=>{
    return(
        <>
          <footer className="footer">
<div className="footer-container">
    <div className="footer-row">
        <div className="footer-column">
<h4>Categories</h4>
<ul className="list-style-none">
    <li><Link className="text-decoration">Action</Link></li>
    <li><Link className="text-decoration">Horror</Link></li>
    <li><Link className="text-decoration">Shooter</Link></li>
    <li><Link className="text-decoration"> Strategy</Link></li>
</ul>

        </div>
        <div className="footer-column">
        <h4>Our Shop</h4>
        <ul  className="list-style-none">
    <li><Link className="text-decoration">Orders</Link></li>
    <li><Link className="text-decoration">Wishlist</Link></li>
    <li><Link className="text-decoration">Profile</Link></li>
   
</ul>
        </div>
        <div className="footer-column">
        <h4>Follow Us</h4>
        <ul  className="list-style-none">
    <li ><Link className="text-decoration">Tweet</Link></li>
    <li><Link className="text-decoration">Linkedin</Link></li>
    <li><Link className="text-decoration">Github</Link></li>
    <li><Link className="text-decoration">Haashnode</Link></li>
</ul>
        </div>

    </div>

</div>

     </footer>
        </>
    )
}