import { useContext } from "react"
import "./ProductList.css"
import { DummyDataContext } from "../../context/DummyDataContext/DummyDataContext"

export const ProductList = ()=>{
    const {getData} = useContext(DummyDataContext)
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
    <li className="individual-filter-lists"><input type="radio"/> <label className="filter-label">High to Low</label> </li>
    <li className="individual-filter-lists"><input type="radio"/> <label className="filter-label">Low to High</label> </li>
</ul>
</div>

<div className="filter-lists">
    <h4 className="range-title">PRICE RANGE</h4>
    <input type="range" min="100" max="3000"/>
</div>

<div className="filter-lists">
    <h4>AVAILABILITY</h4>
    <ul className="list-style-none">
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Top Sellers</label></li>
        <li className="individual-filter-lists" ><input type="checkbox"/> <label className="filter-label">Specials</label></li>
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">On Sale</label></li>
    </ul>
</div>

<div className="filter-lists">
    <h4>CATEGORIES</h4>
    <ul className="list-style-none">
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Action</label></li>
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Horror</label></li>
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Shooter</label></li>
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Strategy</label></li>
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Open World</label></li>
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">Indie Games</label></li>
        <li className="individual-filter-lists"><input type="checkbox"/> <label className="filter-label">First Person</label></li>
    </ul>
</div>

<div className="filter-lists">
    <h4>RATINGS</h4>
    <ul className="list-style-none">
    <li className="individual-filter-lists"><input type="radio"/> <label className="filter-label">5 Stars & below</label> </li>
    <li className="individual-filter-lists"><input type="radio"/> <label className="filter-label">4 Stars & below</label> </li>
    <li className="individual-filter-lists"><input type="radio"/> <label className="filter-label">3 Stars & below</label> </li>
    <li className="individual-filter-lists"><input type="radio"/> <label className="filter-label">Below 3 Stars</label> </li>
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
        {getData?.map(({title,price,image,description})=>(
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