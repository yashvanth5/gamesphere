import { useContext, useReducer } from "react"
import "./ProductList.css"
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext"

const reducerFunction =(state,action)=>{
switch(action.type){
    case "Sort By Price HtoL":{
        return{...state, allData :  state.allData.sort((a,b)=>b.price-a.price)}
    };
    case "Sort By Price LtoH":{
        return { ...state, allData : state.allData.sort((a,b)=>a.price-b.price)}
    }

    //availability

    case "Top_Sellers" : {
        return {...state,topSellers: !state.topSellers }
    }

    case "Special_Games" :{
return {...state,specialGames:!state.specialGames}
    }

    case "Games_On_Sale":{
        return{...state,gamesOnSale:!state.gamesOnSale}
    }

 // categories

 case "Games_Category_Action" : {
    return{...state, gameCategoryAction : !state.gameCategoryAction}
 }
 case "Games_Category_Horror" : {
    return{...state, gameCategoryHorror : !state.gameCategoryHorror}
 }
 case "Games_Category_Shooter" : {
    return{...state, gameCategoryShooter : !state.gameCategoryShooter}
 }
 case "Games_Category_Strategy" : {
    return{...state, gameCategoryStrategy : !state.gameCategoryStrategy}
 }
 case "Games_Category_OpenWorld" : {
    return{...state, gameCategoryOpenWorld : !state.gameCategoryOpenWorld}
 }
 case "Games_Category_Indie" : {
    return{...state, gameCategoryIndie : !state.gameCategoryIndie}
 }
 case "Games_Category_Rpg" : {
    return{...state, gameCategoryRpg : !state.gameCategoryRpg}
 }

 // ratings
 // will see tomorrow

case  "Five_Star_And_Below" : {
    return {...state,rating: action.payload.filter(({ starRatings})=> starRatings<=5 )}
}

case  "Four_Star_And_Below" : {
    return {...state,rating: action.payload.filter(({ starRatings})=> starRatings<=4 )}
}
case  "Three_Star_And_Below" : {
    return {...state,rating: action.payload.filter(({ starRatings})=> starRatings<=3 )}
}
case  "Below_Three_Star" : {
    return {...state,rating: action.payload.filter(({ starRatings})=> starRatings<=3 )}
}



    default:
        return state;
}

}




export const ProductList = ()=>{
    const {getProductData} = useContext(ProductListingContext)

    const [state,dispatch] = useReducer(reducerFunction,{
         allData:[...getProductData],
         topSellers:false,
         specialGames:false,
         gamesOnSale:false,
         gameCategoryAction:false,
         gameCategoryHorror:false,
         gameCategoryShooter:false,
         gameCategoryStrategy:false,
         gameCategoryOpenWorld:false,
         gameCategoryIndie:false,
         gameCategoryRpg:false,
         rating:''

    })
    
    const filterProductData= ()=>{
        let totalProductData = [...state.allData];
        if(state.topSellers){
          totalProductData = totalProductData.filter(({ topProductSellers})=> topProductSellers)
        }
        if(state.specialGames){
            totalProductData= totalProductData.filter(({specials})=>specials)
        }
        if(state.gamesOnSale){
            totalProductData=totalProductData.filter(({onSale})=>onSale)
        }

        // categories
        if(state.gameCategoryAction){
            totalProductData=totalProductData.filter(({categoryName})=>categoryName.includes('Action'))
        }
        if(state.gameCategoryHorror){
            totalProductData=totalProductData.filter(({categoryName})=>categoryName.includes('Horror'))
        }

        if(state.gameCategoryShooter){
            totalProductData=totalProductData.filter(({categoryName})=>categoryName.includes('Shooter'))
        }

        if(state.gameCategoryStrategy){
            totalProductData=totalProductData.filter(({categoryName})=>categoryName.includes('Strategy'))
        }

        if(state.gameCategoryOpenWorld){
            totalProductData=totalProductData.filter(({categoryName})=>categoryName.includes('Open World'))
        }

        if(state.gameCategoryIndie){
            totalProductData=totalProductData.filter(({categoryName})=>categoryName.includes('Indie'))
        }
        if(state.gameCategoryRpg){
            totalProductData=totalProductData.filter(({categoryName})=>categoryName.includes('RPG'))
        }






        return totalProductData
    }

    const allProductData = filterProductData()
    return(
        <>
     <div className="main-product-page">
        <div className="all-filters-aside">
        <div className="filter-Heading">
    <div>
    <h3 className="filter-title" > Filters</h3>
    </div>

<div className="filter-label" >
<input className="reset-title"   type="Reset" />
</div>


</div>

<div className="filter-lists">
<h4>PRICE</h4>
<ul className="list-style-none">
    <li className="individual-filter-lists"><input type="radio"   name="sortgamesprice" onChange={()=>dispatch({type: "Sort By Price HtoL"})}/> <label className="filter-label">High to Low</label> </li>
    <li className="individual-filter-lists"><input type="radio" name="sortgamesprice" onChange={()=>dispatch({type: "Sort By Price LtoH"})}/> <label className="filter-label">Low to High</label> </li>
</ul>
</div>

<div className="filter-lists">
    <h4 className="range-title">PRICE RANGE</h4>
    <input type="range" min="10" max="5000"/>
</div>

<div className="filter-lists">
    <h4>AVAILABILITY</h4>
    <ul className="list-style-none">
        <li className="individual-filter-lists"><input    checked={state.topSellers} type="checkbox" onChange={()=>dispatch({type:"Top_Sellers"})}/> <label className="filter-label">Top Sellers</label></li>
        <li className="individual-filter-lists" ><input  checked={state.specialGames} type="checkbox" onChange={()=>dispatch({type:"Special_Games"})}/> <label className="filter-label">Specials</label></li>
        <li className="individual-filter-lists"><input  checked={state.gamesOnSale} type="checkbox"  onChange={()=>dispatch({type:"Games_On_Sale"})}/> <label className="filter-label">On Sale</label></li>
    </ul>
</div>

<div className="filter-lists">
    <h4>CATEGORIES</h4>
    <ul className="list-style-none">
        <li className="individual-filter-lists"><input checked={state.gameCategoryAction} type="checkbox" onChange={()=>dispatch({type:"Games_Category_Action"})}/> <label className="filter-label">Action</label></li>
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
    <li className="individual-filter-lists"><input name="gamesrating" onChange={()=>dispatch({type : "Five_Star_And_Below" ,payload : getProductData})} type="radio"/> <label className="filter-label">5 Stars & below</label> </li>
    <li className="individual-filter-lists"><input name="gamesrating" onChange={()=>dispatch({type : "Four_Star_And_Below" ,payload : getProductData})} type="radio"/> <label className="filter-label">4 Stars & below</label> </li>
    <li className="individual-filter-lists"><input  name="gamesrating" onChange={()=>dispatch({type : "Three_Star_And_Below",payload : getProductData })} type="radio"/> <label className="filter-label">3 Stars & below</label> </li>
    <li className="individual-filter-lists"><input  name="gamesrating" onChange={()=>dispatch({type : "Below_Three_Star" , payload : getProductData})} type="radio"/> <label className="filter-label">Below 3 Stars</label> </li>
</ul>
</div>

<div className="filter-lists">
    <h4>Platforms</h4>
    <ul className="list-style-none">
    <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Windows</label></li>
    <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Mac Os</label></li>
    </ul>
 
</div>       
        </div>



<div className="map-style">
    {/* <h1 className="product-title">PRODUCT CART</h1> */}
    <div className="product-show">
        {allProductData?.map(({title,price,image,description})=>(
            <div className="individual-product-item" >
                <img src={image} className="item-image" alt="images"/>
                <h3 className="item-title"  >{title}</h3>
                <p>{price}</p>
                <button>Buy Now</button>
                </div>
        ))}
    </div>
</div>

     </div>
        </>
    )
}