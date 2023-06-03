import { v4 as uuid } from "uuid";
import {
  actionimg,
  shooterimg,
  horrorimg,
  strategyimg,
} from "../../pages/HomePage/Home";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
    image: actionimg,
    value: "gameCategoryAction",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    image: horrorimg,
    value: "gameCategoryHorror",
  },
  {
    _id: uuid(),
    categoryName: "Shooter",
    image: shooterimg,
    value: "gameCategoryShooter",
  },
  {
    _id: uuid(),
    categoryName: "Strategy",
    image: strategyimg,
    value: "gameCategoryStrategy",
  },
];
