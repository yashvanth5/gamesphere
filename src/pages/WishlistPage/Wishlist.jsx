import { useContext } from "react";
import "./Wishlist.css";
import { WishlistContext } from "../../context/WishlistContext/WishlistContext";
import { Link } from "react-router-dom";
import { FaRegHeart} from "react-icons/fa";
import { BsFillHeartFill} from "react-icons/bs";
import {  AiFillStar} from "react-icons/ai";
import { CartContext } from "../../context/CartContext/CartContext";
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext";


export const Wishlist = ()=>{
    const {wishlistState ,addToWishlist,removeFromWishlist} = useContext(WishlistContext);
    const {addToCart,cartState } = useContext(CartContext)
    const {getProductData} = useContext(ProductListingContext)

    console.log(wishlistState)

   

    return(
        <>


        {/* {wishlistState.wishlist.map((game)=>{
   const {title,price,image,_id,starRatings,discountPercent,discountPrice} = game
   return(
    <>
     <img src={image} className="item-image" alt="images"/>
    </>
   )

        } )} */}
        <div className="map-style">
 <div className="wishlist-product-show">
{wishlistState.wishlist.length > 0 ?   wishlistState.wishlist.map((game)=>{
         
         const {title,price,image,_id,starRatings,discountPercent,discountPrice} = game
         // once ask for clartity to take getproductdata here or wishilliststate.wishliist
         const isAlreadyInWishlist = getProductData.some((individualWishlist)=>individualWishlist._id === _id )
         const isAlreadyInCart =  cartState.cart.some((individualCart)=>individualCart._id === _id)
         return  (
           <Link to={`/individual/${_id}`} className="individual-product-item" >
               <img src={image} className="item-image" alt="images"/>
               <div className="item-desciptions">
                   <div className="title-with-wishlist">
                       <div>
                       <h3 className="item-title"  >{title}</h3>
                       </div>
 <div className="wishlist"> 
 {isAlreadyInWishlist ?    <Link onClick={()=>removeFromWishlist(game)}   >
                 <BsFillHeartFill className="wishlist-icon"/>
                 </Link>  :   <Link onClick={()=>addToWishlist(game)}   >
                 <FaRegHeart className="wishlist-icon"/>
                 </Link>  }
               </div>
                   </div>
 
                 <div className="star-rating">
                      <p>{starRatings}</p>
                     <AiFillStar className="games-rating"/>
                      </div> 
                       
                  
                     
                      <div className="price-content">
                       {/* //add discountprice price-discountPrice */}
                      <p class="discount-price ">{ price===0 ? 'Free' : `₹ ${price-discountPrice}`}</p>
                     {price===0 ? "" : <p class="discount-price "><s class="original-price">₹ {price} </s></p>}
 
                    
                  {price===0? "" :  <p className="discount-percent">({discountPercent}% off)</p>}  
                      </div>
                      
                       
             
           
                      {isAlreadyInCart ?  <Link to="/cart" >
                 <button className="item-go-to-cart-btn"  >Go to Cart </button>
                 </Link>  :   <Link  >
                 <button className="item-buy-btn" onClick={()=>addToCart(game)}>Add to Cart</button>
                 </Link>   }
                
               </div>
 
               
               </Link>
       )}) : <p>No Product Found</p> }

</div>
</div>

        </>
    )
}