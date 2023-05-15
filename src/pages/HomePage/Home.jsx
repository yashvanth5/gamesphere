import { Link } from "react-router-dom"
import bannerimg from "../images/gamestore.webp"

export const Home=()=>{
    return(
        <>
     
        <div >
        <img src={bannerimg} className="banner-img"/>
       
        </div>
        

        <button className="browse-btn"> <Link className="browse-btn-link" > </Link>Browse deals</button>
        
      <div className="total-category-card">
      <div>
      <p className="game-genres"> Popular Genres</p>

      </div>
      <div className="genre-category" >
        <div className="first-category">
        Action
        </div>
        <div className="second-category">
Indie
</div>
<div className="third-category">
Shooter
</div>
<div className="fourth-category">
Sports & Racing
</div>

      </div>
      </div>
      

        </>
    )
}