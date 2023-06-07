import actionimg from "../../images/category-images/action-category-photo-one.webp";
import shooterimg from "../../images/category-images/shooter-category-photo-one.jpg";
import horrorimg from "../../images/category-images/horror-category-photo-one.avif";
import strategyimg from "../../images/category-images/strategy-category-photo-one.avif";
import { useContext } from "react";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import { CategoryContext } from "../../context/CategoryContext/CategoriesContext";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { HeroSection } from "./HomeComponents/HeroSection";
import { GenreSection } from "./HomeComponents/GenreSection";
import { GamesSection } from "./HomeComponents/GamesSection";

export { actionimg, shooterimg, horrorimg, strategyimg };

export const Home = () => {
  const { isErrorGamesCategory, isLoadingGamesCategory } =
    useContext(CategoryContext);

  return (
    <>
      {isLoadingGamesCategory ? (
        <Loader />
      ) : isErrorGamesCategory ? (
        <Error />
      ) : (
        <div>
          <HeroSection />

          <GenreSection />

          <GamesSection />

          <Footer />
        </div>
      )}
    </>
  );
};
