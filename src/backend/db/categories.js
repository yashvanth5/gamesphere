import { v4 as uuid } from "uuid";
import { actionimg ,shooterimg,horrorimg,strategyimg} from "../../pages/HomePage/Home";


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
   image:
      actionimg,
  },
  {
    _id: uuid(),
    categoryName: "Horror",
   image:
      horrorimg,
  },
  {
    _id: uuid(),
    categoryName: "Shooter",
   image:
     shooterimg,
  },
  {
    _id: uuid(),
    categoryName: "Strategy",
   image:
      strategyimg,
  },
];
