import { useContext, useReducer } from "react"
import "./ProductList.css"
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext/CartContext"
import { FaRegHeart} from "react-icons/fa";

import {  AiFillStar} from "react-icons/ai";








export const ProductList = ()=>{
    const {getProductData,state,dispatch,allProductData} = useContext(ProductListingContext)
    const {itemsAddHandler} = useContext(CartContext)
    



   

//     const filterProductData= ()=>{
//         // console.log(getProductData)

//         const totalProductData = [...getProductData].filter(({comingSoon})=>!comingSoon);
//         // console.log(totalProductData)

//         const filterWithPriceRange = state.filterPriceRange ? totalProductData?.filter((game)=>game.price<=(state.filterPriceRange)) : totalProductData;

//     //  console.log(filterWithPriceRange)

//         const sortByPrice = filterWithPriceRange?.sort((a,b)=>{
//             if(state.sortPrice === 'HtoL') {
//                 return b.price - a.price
//             } 
//             else if (state.sortPrice === 'LtoH'){
//                  return a.price - b.price
//               } 
//               else {
//                 return 0;
//               }
          
                            
//         })

//         // console.log(sortByPrice)


// const availabilityGames = state.topSellers||state.specialGames||state.gamesOnSale ? sortByPrice.filter((game)=>(state.topSellers && game.topProductSellers)|| (state.specialGames && game.specials) || (state.gamesOnSale && game.onSale)  ) : sortByPrice;

//         // console.log(availabilityGames)

          

//         const platformGames = state.gamePlatformWindow || state.gamePlatformMac ? availabilityGames?.filter((games)=>
        
//         (state.gamePlatformWindow && games.platform.includes('windows')) ||
//         (state.gamePlatformMac && games.platform.includes('mac')) 
        
//         ) :availabilityGames



//         const filterWthRating =   state.rating !== null ? (platformGames.filter( (game)=>   game.starRatings <= state.rating )) : platformGames
//         // console.log(filterWthRating)
     

//         const allCategoryGames = state.gameCategoryAction ||  state.gameCategoryHorror  || state.gameCategoryShooter || state.gameCategoryStrategy || state.gameCategoryOpenWorld || state.gameCategoryIndie || state.gameCategoryRpg ? filterWthRating?.filter(
//             (games)=>
//             (state.gameCategoryAction && games.categoryName.includes('Action')  ) ||
//             (state.gameCategoryHorror && games.categoryName.includes('Horror')) ||
//             (state.gameCategoryShooter && games.categoryName.includes('Shooter')) ||
//             (state.gameCategoryStrategy && games.categoryName.includes('Strategy')) ||
//             (state.gameCategoryOpenWorld && games.categoryName.includes('Open World')) ||
//             (state.gameCategoryIndie && games.categoryName.includes('Indie')) ||
//             (state.gameCategoryRpg && games.categoryName.includes('RPG')) 
            
//             )  : filterWthRating
      
//         return allCategoryGames
//     }

 

 
//   const allProductData = filterProductData()


    

    // console.log(filterProductData())


// sort function 
    const sortRadioHandler = (selectedValue) =>{
        dispatch({type: "Sort_By_Price" , payload : selectedValue})
    }




    return(
        <>
     <div className="main-product-page">
        <div className="all-filters-aside">
        <div className="filter-Heading">
    <div>
    <h3 className="filter-title" > Filters</h3>
    </div>

<div className="filter-label" >

<button  className="reset-title" onClick={()=>dispatch({type:'Games_Reset'})}>Clear</button>
</div>


</div>

<div className="filter-lists">
<h4>PRICE</h4>
<ul className="list-style-none">
    <li className="individual-filter-lists"><input type="radio" value="HtoL" checked={state.sortPrice === 'HtoL'}   name="sortgamesprice" onChange={()=>sortRadioHandler('HtoL')}/> <label className="filter-label">High to Low</label> </li>
    <li className="individual-filter-lists"><input type="radio" value="LtoH" checked={state.sortPrice === 'LtoH'}  name="sortgamesprice" onChange={()=>sortRadioHandler('LtoH')}/> <label className="filter-label">Low to High</label> </li>
</ul>
</div>

<div className="filter-lists">
    <h4 className="range-title">PRICE RANGE  <span style={{marginLeft: "30px"}}>{state.filterPriceRange}</span></h4> 
    <input type="range" min="0" max="4000" step="50" value={state.filterPriceRange} onChange={(e)=>dispatch({type:'Filter_By_Price',payload:e.target.value})}/>
</div>

<div className="filter-lists">
    <h4>AVAILABILITY</h4>
    <ul className="list-style-none">
    
        <li className="individual-filter-lists"><input name="gamesavailable" checked={state.topSellers} type="checkbox" onChange={()=>dispatch({type:"Top_Sellers"})}/> <label className="filter-label">Top Sellers</label></li>
        <li className="individual-filter-lists" ><input  name="gamesavailable" checked={state.specialGames} type="checkbox" onChange={()=>dispatch({type:"Special_Games"})}/> <label className="filter-label">Specials</label></li>
        <li className="individual-filter-lists"><input name="gamesavailable" checked={state.gamesOnSale} type="checkbox"  onChange={()=>dispatch({type:"Games_On_Sale"})}/> <label className="filter-label">On Sale</label></li>
    </ul>
</div>

<div className="filter-lists">
    <h4>CATEGORIES</h4>
    <ul className="list-style-none">
        <li className="individual-filter-lists">
            <input checked={state.gameCategoryAction} type="checkbox" value="Action" onChange={(e)=>dispatch({type:"Games_Category_Action" })}/> 
            <label className="filter-label">Action</label>
            </li>
        <li className="individual-filter-lists"><input checked={state.gameCategoryHorror} type="checkbox" onChange={()=>dispatch({type:"Games_Category_Horror"})}/> <label className="filter-label">Horror</label></li>
        <li className="individual-filter-lists"><input  checked={state.gameCategoryShooter} type="checkbox" onChange={()=>dispatch({type:"Games_Category_Shooter"})}/> <label className="filter-label">Shooter</label></li>
        <li className="individual-filter-lists"><input checked={state.gameCategoryStrategy}  type="checkbox" onChange={()=>dispatch({type:"Games_Category_Strategy"})}/> <label className="filter-label">Strategy</label></li>
        <li className="individual-filter-lists"><input checked={state.gameCategoryOpenWorld}  type="checkbox" onChange={()=>dispatch({type:"Games_Category_OpenWorld"})}/> <label className="filter-label">Open World</label></li>
        <li className="individual-filter-lists"><input checked={state.gameCategoryIndie}  type="checkbox" onChange={()=>dispatch({type:"Games_Category_Indie"})}/> <label className="filter-label">Indie Games</label></li>
        <li className="individual-filter-lists"><input  checked={state.gameCategoryRpg} type="checkbox" onChange={()=>dispatch({type:"Games_Category_Rpg"})}/> <label className="filter-label">Rpg</label></li>
    </ul>
</div>



<div className="filter-lists">
    <h4>RATINGS</h4>
    <ul className="list-style-none">

        
 



     <li className="individual-filter-lists"><input value= {state.rating} checked={state.rating === 5 }  onChange = {()=>dispatch({type:'Games_Rating' , payload : 5})}  name="gamesrating"  type="radio"/> <label className="filter-label">5 Stars & below</label> </li>

    <li className="individual-filter-lists"><input checked={state.rating === 4 }  onChange = {()=>dispatch({type:'Games_Rating' , payload : 4})}   name="gamesrating" value= {state.rating}  type="radio"/> <label className="filter-label">4 Stars & below</label> </li>

    <li className="individual-filter-lists"><input  checked={state.rating === 3 }  onChange = {()=>dispatch({type:'Games_Rating' , payload : 3})}   name="gamesrating" value= {state.rating}  type="radio"/> <label className="filter-label">3 Stars & below</label> </li>
    

</ul>
</div>

<div className="filter-lists">
    <h4>Platforms</h4>
    <ul className="list-style-none">
    <li className="individual-filter-lists"><input type="checkbox" checked={state.gamePlatformWindow} onChange={()=>dispatch({type:"Windows_Platform"})}/> <label className="filter-label">Windows</label></li>
    <li className="individual-filter-lists"><input type="checkbox" checked={state.gamePlatformMac}  onChange={()=>dispatch({type:"Mac_Platform"})}/> <label className="filter-label">Mac Os</label></li>
    </ul>
 
</div>       
        </div>



<div className="map-style">
    {/* <h1 className="product-title">PRODUCT CART</h1> */}
    <div className="product-show">
        {allProductData.length > 0 ?   allProductData?.map((game)=>{
          const {title,price,image,description,_id,starRatings,discount} = game
          return  (
            <Link to={`/individual/${_id}`} className="individual-product-item" >
                <img src={image} className="item-image" alt="images"/>
                <div className="item-desciptions">
                    <div className="title-with-wishlist">
                        <div>
                        <h3 className="item-title"  >{title}</h3>
                        </div>
 <div className="wishlist"> 
                    <Link to="/wishlist" >
                 <FaRegHeart className="wishlist-icon"/>
                 </Link> 
                </div>
                    </div>

                  <div className="star-rating">
                       <p>{starRatings}</p>
                      <AiFillStar className="games-rating"/>
                       </div> 
                        
                   
                      
                       <div className="price-content">
                       <p class="start-price">{ price===0 ? 'Free' : `Rs ${price}`}</p>
                      {price===0 ? "" : <p class="start-price"><s class="real-p"> Rs. 490</s></p>}
                      {/* kal */}
                      {/* <p>{discount} off</p> */}
                       </div>
                       
                        
              
            
              <Link to="/cart" >
                 <button className="item-buy-btn" onClick={()=>itemsAddHandler(game)}>Add to Cart</button>
                 </Link> 
                 
                </div>

                
                </Link>
        )}) : <p>No Product Found</p> }
    </div>
</div>

     </div>
        </>
    )
}