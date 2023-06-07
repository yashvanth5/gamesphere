import { useContext } from "react";
import { CategoryContext } from "../../../context/CategoryContext/CategoriesContext";
import { useNavigate } from "react-router";

export const GenreSection = () => {
  const { categoryState, getCategoryByID } = useContext(CategoryContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage-categories">
        <div>
          <p className="genres-title"> POPULAR GENRES</p>
        </div>

        <div className="genres-section">
          {categoryState?.categories?.map(({ _id, categoryName, image }) => (
            <button
              className="single-genre-category single-genre-btn"
              key={_id}
              onClick={() => {
                getCategoryByID(_id);
                navigate("/store");
              }}
            >
              <img src={image} alt="Action" className="all-categories-image" />
              <p className="category-names">{categoryName}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
