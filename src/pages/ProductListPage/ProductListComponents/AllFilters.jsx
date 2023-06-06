import { useContext } from "react";
import { ProductListingContext } from "../../../context/ProductListingContext/ProductListingContext";
import CancelIcon from "@mui/icons-material/Cancel";

export const AllFilters = () => {
  const { state, dispatch, displayFilters, setDisplayFilters } = useContext(
    ProductListingContext
  );
  const sortRadioHandler = (selectedValue) => {
    dispatch({ type: "Sort_By_Price", payload: selectedValue });
  };

  return (
    <>
      <div className="filter-Heading">
        <div>
          <h3 className="filter-title"> Filters</h3>
        </div>

        <div className="filter-label">
          <button
            className="reset-title"
            onClick={() => dispatch({ type: "Games_Reset" })}
          >
            Clear
          </button>
        </div>

        <div className="close-filters" onClick={() => setDisplayFilters(false)}>
          <CancelIcon className="cancel-btn" />
        </div>
      </div>

      <div className="filter-lists">
        <h4>PRICE</h4>
        <ul className="list-style-none">
          <li className="individual-filter-lists">
            <input
              type="radio"
              value="HtoL"
              checked={state.sortPrice === "HtoL"}
              name="sortgamesprice"
              onChange={() => sortRadioHandler("HtoL")}
            />{" "}
            <label className="filter-label">High to Low</label>{" "}
          </li>
          <li className="individual-filter-lists">
            <input
              type="radio"
              value="LtoH"
              checked={state.sortPrice === "LtoH"}
              name="sortgamesprice"
              onChange={() => sortRadioHandler("LtoH")}
            />{" "}
            <label className="filter-label">Low to High</label>{" "}
          </li>
        </ul>
      </div>

      <div className="filter-lists">
        <h4 className="range-title">
          PRICE RANGE{" "}
          <span style={{ marginLeft: "30px" }}>{state.filterPriceRange}</span>
        </h4>
        <input
          type="range"
          min="0"
          max="4000"
          step="50"
          class="price-range"
          value={state.filterPriceRange}
          onChange={(e) =>
            dispatch({ type: "Filter_By_Price", payload: e.target.value })
          }
        />
      </div>

      <div className="filter-lists">
        <h4>AVAILABILITY</h4>
        <ul className="list-style-none">
          <li className="individual-filter-lists">
            <input
              name="gamesavailable"
              checked={state.topSellers}
              type="checkbox"
              onChange={() => dispatch({ type: "Top_Sellers" })}
            />{" "}
            <label className="filter-label">Top Sellers</label>
          </li>
          <li className="individual-filter-lists">
            <input
              name="gamesavailable"
              checked={state.specialGames}
              type="checkbox"
              onChange={() => dispatch({ type: "Special_Games" })}
            />{" "}
            <label className="filter-label">Specials</label>
          </li>
          <li className="individual-filter-lists">
            <input
              name="gamesavailable"
              checked={state.gamesOnSale}
              type="checkbox"
              onChange={() => dispatch({ type: "Games_On_Sale" })}
            />{" "}
            <label className="filter-label">On Sale</label>
          </li>
        </ul>
      </div>

      <div className="filter-lists">
        <h4>CATEGORIES</h4>
        <ul className="list-style-none">
          <li className="individual-filter-lists">
            <input
              checked={state.gameCategoryAction}
              type="checkbox"
              value="Action"
              onChange={(e) => dispatch({ type: "Games_Category_Action" })}
            />
            <label className="filter-label">Action</label>
          </li>
          <li className="individual-filter-lists">
            <input
              checked={state.gameCategoryHorror}
              type="checkbox"
              onChange={() => dispatch({ type: "Games_Category_Horror" })}
            />{" "}
            <label className="filter-label">Horror</label>
          </li>
          <li className="individual-filter-lists">
            <input
              checked={state.gameCategoryShooter}
              type="checkbox"
              onChange={() => dispatch({ type: "Games_Category_Shooter" })}
            />{" "}
            <label className="filter-label">Shooter</label>
          </li>
          <li className="individual-filter-lists">
            <input
              checked={state.gameCategoryStrategy}
              type="checkbox"
              onChange={() => dispatch({ type: "Games_Category_Strategy" })}
            />{" "}
            <label className="filter-label">Strategy</label>
          </li>
          <li className="individual-filter-lists">
            <input
              checked={state.gameCategoryOpenWorld}
              type="checkbox"
              onChange={() => dispatch({ type: "Games_Category_OpenWorld" })}
            />{" "}
            <label className="filter-label">Open World</label>
          </li>
          <li className="individual-filter-lists">
            <input
              checked={state.gameCategoryIndie}
              type="checkbox"
              onChange={() => dispatch({ type: "Games_Category_Indie" })}
            />{" "}
            <label className="filter-label">Indie Games</label>
          </li>
          <li className="individual-filter-lists">
            <input
              checked={state.gameCategoryRpg}
              type="checkbox"
              onChange={() => dispatch({ type: "Games_Category_Rpg" })}
            />{" "}
            <label className="filter-label">Rpg</label>
          </li>
        </ul>
      </div>

      <div className="filter-lists">
        <h4>RATINGS</h4>
        <ul className="list-style-none">
          <li className="individual-filter-lists">
            <input
              value={state.rating}
              checked={state.rating === 5}
              onChange={() => dispatch({ type: "Games_Rating", payload: 5 })}
              name="gamesrating"
              type="radio"
            />{" "}
            <label className="filter-label">5 Stars & below</label>{" "}
          </li>

          <li className="individual-filter-lists">
            <input
              checked={state.rating === 4}
              onChange={() => dispatch({ type: "Games_Rating", payload: 4 })}
              name="gamesrating"
              value={state.rating}
              type="radio"
            />{" "}
            <label className="filter-label">4 Stars & below</label>{" "}
          </li>

          <li className="individual-filter-lists">
            <input
              checked={state.rating === 3}
              onChange={() => dispatch({ type: "Games_Rating", payload: 3 })}
              name="gamesrating"
              value={state.rating}
              type="radio"
            />{" "}
            <label className="filter-label">3 Stars & below</label>{" "}
          </li>
        </ul>
      </div>

      <div className="filter-lists">
        <h4>Platforms</h4>
        <ul className="list-style-none">
          <li className="individual-filter-lists">
            <input
              type="checkbox"
              checked={state.gamePlatformWindow}
              onChange={() => dispatch({ type: "Windows_Platform" })}
            />{" "}
            <label className="filter-label">Windows</label>
          </li>
          <li className="individual-filter-lists">
            <input
              type="checkbox"
              checked={state.gamePlatformMac}
              onChange={() => dispatch({ type: "Mac_Platform" })}
            />{" "}
            <label className="filter-label">Mac Os</label>
          </li>
        </ul>
      </div>
    </>
  );
};
