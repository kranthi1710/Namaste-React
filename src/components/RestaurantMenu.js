import { useEffect, useState } from "react"; //named import
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []); //callback function and optional argument

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=27739&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("json---->", json);
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
      <h3>
        {
          resInfo?.cards[2]?.groupedCard?.cardsGroupMap?.REGULAR?.card?.card
            ?.itemCards
        }
      </h3>
    </div>
  );
};

export default RestaurantMenu;
