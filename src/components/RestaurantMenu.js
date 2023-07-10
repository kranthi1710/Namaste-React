import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // const { name, id, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>{resInfo.id}</h2>
      <h2>{resInfo.cuisines.join(",")}</h2>
      {/* <h3>
        {
          resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards
        }
      </h3> */}
    </div>
  );
};

export default RestaurantMenu;
