import RestaurantContainer from "./RestaurantContainer";
import { useEffect, useState } from "react";
const Body = () => {
  // State variable - Super powerful variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  //Below is JS variable, if we give react powers to it, it become super energetic React variable
  // let listOfRest = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json.data.cards[2].data.data.cards);
  };

  return (
    <>
      <div className="filter">
        {/* Here onClick is invoking a callback function which is a javascript fuction, so we wrap it in {}. Callback function will be invoked on click of button */}
        <button
          className="filter-btn"
          onClick={() => {
            console.log(listOfRestaurants);
            let filteredList = listOfRestaurants.filter((res) => {
              return res.data.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="res-container">
        {/* Here we are returnig some piece of JSX in () */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantContainer key={restaurant.data.id} resObj={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
