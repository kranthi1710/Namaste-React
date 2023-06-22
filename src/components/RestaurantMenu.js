import { useEffect, useState } from "react"; //named import
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []); //callback function and optional argument

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
  };
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
