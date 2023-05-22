import { useContext } from "react"
import { useParams } from "react-router"
import { ProductListingContext } from "../../context/ProductListingContext/ProductListingContext"
import { Link } from "react-router-dom"

import "./IndividualGame.css"

export const IndividualGame = ()=>{
    const {getProductData} = useContext(ProductListingContext)
    const {individualGameId} = useParams()

    const selectedGame = getProductData.find((game)=>game._id===String(individualGameId))
    return(
        <>
        <div className="main-game-card">
            <div className="game-img-main">
                <img className="game-image" src={selectedGame.image}/>
            </div>

            <div className="img-description">
                {/* here information about imagae */}
             <h1>  {selectedGame.title}</h1>
             <p><b>Description :</b> {selectedGame.description}</p>
             <p> <b>Publisher :</b> {selectedGame.publisher}</p>
             <p> <b>ReleaseDate : </b>{selectedGame.releaseDate}</p>
             <p> <b>Price :</b> {selectedGame.price}</p>
             
             <p> <b>Platform : </b>{selectedGame.platform}</p>
             {/* we will see late to use or not */}
             <p> <b>Category :</b> {selectedGame.categoryName.map(item=>(<div>{item}</div>))}</p>

             <Link to="/store">Go Back</Link>
            </div>
           
        </div>
        </>
    )
}