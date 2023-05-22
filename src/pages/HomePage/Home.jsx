import { Link } from "react-router-dom"
import bannerimg from "../images/gamestore.webp"
import actionimg from "../images/category-images/action-category-photo-one.webp"
import shooterimg from "../images/category-images/shooter-category-photo-one.jpg"
import horrorimg from "../images/category-images/horror-category-photo-one.avif"
import strategyimg from "../images/category-images/strategy-category-photo-one.avif"
import { useContext, useState } from "react"
import "./Home.css";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext"
import { Footer } from "../../components/Footer/Footer"


export const Home=()=>{
  const {getProductData} = useContext(ProductListingContext)


const featuredGames = getProductData.filter(({featured})=>featured);

const bestSellerGames = getProductData.filter(({bestSeller})=>bestSeller);

const commingSoonGames = getProductData.filter(( {comingSoon})=> comingSoon)

    return(
        <>
     
        <div >
        <img src={bannerimg} alt="BannerImage" className="banner-img"/>
       
        </div>
        
        <button className="banner-btn"> <Link className="banner-btn-link" to="/store" >Browse deals </Link></button>


        
        
      <div className="homepage-categories">
      <div>
      <p className="genres-title"> POPULAR GENRES</p>

      </div>
      <div className="genres-section" >
   <div className="single-genre-category" >
   <img src={actionimg} alt="Action Image" className="all-categories-image" />
   <p className="category-names">Action</p>
   </div>
 


    

   <div className="single-genre-category">
   <img src={horrorimg} alt="Horror Image" className="all-categories-image"/>
   <p className="category-names" > Horror</p>
   </div>
        



<div className="single-genre-category">
<img alt="Shooter Image"  src={shooterimg} className=" all-categories-image"/>
<p  className="category-names">Shooter</p>
</div>



<div className="single-genre-category">
<img  alt="Strategy Image"  src={strategyimg} className=" all-categories-image"/>
<p className="category-names">Strategy</p>
</div>


      </div>
      </div>

{/* card-1 */}

<div>
    {/* <div> */}
    <p className="section-title" >Featured</p>
    
    {/* </div> */}
    <div className="all-products-section">
      {featuredGames?.map(({title,price,image})=>(
        <div className="sections-individual-product" >
            <div className="sections-all-images">
            <img src={image} className="sections-image-individual" alt="old games images"/>
         </div>
            <p className="sections-image-title">{title}</p>
            {/* <p>{price}</p> */}
        </div>
      ))}
     </div>





</div>



{/* card-2 */}


<div>
    {/* <div> */}
    <p className="section-title" >Best Sellers</p>
    {/* </div> */}
    <div className="all-products-section">
      {bestSellerGames?.map(({title,price,image})=>(
        <div className="sections-individual-product" >
            <div className="sections-all-images">
            <img src={image} className="sections-image-individual" alt="old games images"/>
         </div>
            <p className="sections-image-title" >{title}</p>
            {/* <p>{price}</p> */}
        </div>
      ))}
     </div>


</div>


{/* card-3 */}


<div>
    {/* <div> */}
    <p className="section-title" >Coming Soon</p>
    {/* </div> */}
    <div className="all-products-section">
      {commingSoonGames?.map(({title,price,image})=>(
        <div className="sections-individual-product" >
            <div className="sections-all-images">
            <img src={image} className="sections-image-individual" alt="old games images"/>
         </div>
            <p className="sections-image-title" >{title}</p>
            {/* <p>{price}</p> */}
        </div>
      ))}
     </div>

     


</div>

 <Footer/>


    </>
    )
}

