import { Link } from "react-router-dom"
import bannerimg from "../images/gamestore.webp"
import actionimg from "../images/category-images/action-category-photo-one.webp"
import shooterimg from "../images/category-images/shooter-category-photo-one.jpg"
import horrorimg from "../images/category-images/horror-category-photo-one.avif"
import strategyimg from "../images/category-images/strategy-category-photo-one.avif"
import { useContext, useState } from "react"
import "./Home.css";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext"

export const Home=()=>{
  const {getProductData} = useContext(ProductListingContext)
// const [startIndex, setStartIndex] = useState(0);

// const handlePrevious = () => {
//   setStartIndex((prevIndex) => Math.max(0, prevIndex - 4)); // Adjust the number of images to slide
// };

// const handleNext = () => {
//   const maxStartIndex = Math.max(0, getProductData.length - 4); // Adjust the number of images to slide
//   setStartIndex((prevIndex) => Math.min(prevIndex + 4, maxStartIndex));
// };


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
      {getProductData?.map(({title,price,image})=>(
        <div className="sections-individual-product" >
            <div className="sections-all-images">
            <img src={image} className="sections-image-individual" alt="old games images"/>
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
    <p className="section-title" >Best Sellers</p>
    {/* </div> */}
    <div className="all-products-section">
      {getProductData?.map(({title,price,image})=>(
        <div className="sections-individual-product" >
            <div className="sections-all-images">
            <img src={image} className="sections-image-individual" alt="old games images"/>
         </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
      ))}
     </div>


</div>
{/* ----------------------------------------------------- */}
{/* experiment */}
{/* lol */}
{/* <div>
        <p className="section-title">Coming Soon</p>
      </div>
      <div className="arrows">
        {startIndex > 0 && (
          <button className="arrow left-arrow" onClick={handlePrevious}>
            &lt;
          </button>
        )}
        <div className="all-products-section">
          {getProductData?.slice(startIndex, startIndex + 4).map(({ title, price, image }) => (
            <div className="sections-individual-product" key={title}>
              <div className="sections-all-images">
                <img src={image} className="sections-image-individual" alt="old games images" />
              </div>
              <p>{title}</p>
              <p>{price}</p>
            </div>
          ))}
        </div>
        {startIndex < getProductData.length - 4 && (
          <button className="arrow right-arrow" onClick={handleNext}>
            &gt;
          </button>
        )}
      </div> */}
{/* ------------------------------------------------- */}

{/* card-3 */}


<div>
    {/* <div> */}
    <p className="section-title" >Coming Soon</p>
    {/* </div> */}
    <div className="all-products-section">
      {getProductData?.map(({title,price,image})=>(
        <div className="sections-individual-product" >
            <div className="sections-all-images">
            <img src={image} className="sections-image-individual" alt="old games images"/>
         </div>
            <p>{title}</p>
            <p>{price}</p>
        </div>
      ))}
     </div>


</div>


    </>
    )
}

