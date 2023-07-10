import { useEffect, useState } from "react"; //named import
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); //callback function and optional argument
  const fetchData = async () => {
    const resData = await fetch(MENU_URL + resId);
    const result = await resData.json();
    setResInfo(result.data?.cards[0]?.card?.card?.info);
  };
  return resInfo;
};

export default useRestaurantMenu;
