import { Link } from "react-router-dom"
import bannerimg from "../images/gamestore.webp"
import actionimg from "../images/category-images/action-category-photo-one.webp"
import shooterimg from "../images/category-images/shooter-category-photo-one.jpg"
import horrorimg from "../images/category-images/horror-category-photo-one.avif"
import strategyimg from "../images/category-images/strategy-category-photo-one.avif"
import { useContext } from "react"
import { DummyDataContext } from "../../context/DummyDataContext/DummyDataContext"

export const Home=()=>{
const {getData} = useContext(DummyDataContext)
    return(
        <>
     
        <div >
        <img src={bannerimg} alt="BannerImage" className="banner-img"/>
       
        </div>
        

        <button className="browse-btn"> <Link className="browse-btn-link" > </Link>Browse deals</button>
        
      <div className="total-category-card">
      <div>
      <p className="genres-title"> POPULAR GENRES</p>

      </div>
      <div className="genre-category" >
   <div className="single-genre-category" >
   <img src={actionimg} alt="Action Image" className="all-categories  " />
   <p className="category-title">Action</p>
   </div>
 

    

   <div className="single-genre-category">
   <img src={horrorimg} alt="Horror Image" className="all-categories "/>
   <p className="category-title" > Horror</p>
   </div>
        



<div className="single-genre-category">
<img alt="Shooter Image"  src={shooterimg} className=" all-categories "/>
<p  className="category-title">Shooter</p>
</div>



<div className="single-genre-category">
<img  alt="Strategy Image"  src={strategyimg} className=" all-categories "/>
<p className="category-title">Strategy</p>
</div>


      </div>
      </div>

{/* card-1 */}

<div>
    {/* <div> */}
    <p className="scroll-title" >Featured</p>
    {/* </div> */}
    <div className="old-game-products">
      {getData?.map(({title,price,thumbnailImage})=>(
        <div className="old-game-individual-products" >
            <div className="image-old">
            <img src={thumbnailImage} className="old-game-image-individual" alt="old games images"/>
         </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
      ))}
     </div>





</div>



{/* card-2 */}


<div>
    {/* <div> */}
    <p className="scroll-title" >Best Sellers</p>
    {/* </div> */}
    <div className="old-game-products">
      {getData?.map(({title,price,thumbnailImage})=>(
        <div className="old-game-individual-products" >
            <div className="image-old">
            <img src={thumbnailImage} className="old-game-image-individual" alt="old games images"/>
         </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
      ))}
     </div>


</div>

{/* card-3 */}


<div>
    {/* <div> */}
    <p className="scroll-title" >Coming Soon</p>
    {/* </div> */}
    <div className="old-game-products">
      {getData?.map(({title,price,thumbnailImage})=>(
        <div className="old-game-individual-products" >
            <div className="image-old">
            <img src={thumbnailImage} className="old-game-image-individual" alt="old games images"/>
         </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
      ))}
     </div>


</div>
     
     

     

     {/* <footer className="footer">
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

     </footer> */}


   

    

  
  

      

        </>
    )
}

