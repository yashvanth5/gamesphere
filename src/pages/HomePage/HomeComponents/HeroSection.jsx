import { Link } from "react-router-dom";
import bannerimg from "../../../images/gamestore.webp";

export const HeroSection = () => {
  return (
    <>
      <div>
        <img src={bannerimg} alt="BannerImage" className="banner-img" />
      </div>

      <button className="banner-btn">
        {" "}
        <Link className="banner-btn-link" to="/store">
          Browse Deals{" "}
        </Link>
      </button>
    </>
  );
};
