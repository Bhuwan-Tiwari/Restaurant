import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../Utils/useRestaurantMenu";
const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  console.log("resInfo is", resInfo);
  if(resInfo.data===null) return<Shimmer/>

  return (
    <div style={{ padding: "200px" }}>
      <h1>Here will be the restaurant menu</h1>
    </div>
  );
};

export default ResturantMenu;
