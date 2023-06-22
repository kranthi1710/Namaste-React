import RestaurantContainer from "./RestaurantContainer";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  // State variable - Super powerful variable
  //Whenever State variable updates, React triggers a reconciliation cycle(re-renders the component)
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  //WHen we are filtering data, use a copy of actual data and use that copy for filtering and updating, Then use  filtered data for displaying.
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  //Below is JS variable, if we give react powers to it, it become super energetic React variable
  // let listOfRest = [];
  console.log("body rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //OPtional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //COnditional Rendering---Rendering the component(ex:Shimmer) with a condition(ex:listOfRestaurants.length === 0)
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  //COnditional Rendering using Ternary
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <div className="search-btn">
          {/* To track the value of the input box, whatever user is typing, We have to bind that value to local state variable */}
          {/*IMP: React is re-rendering the whole body component on every State variable update and Diff Algorithm takes place, comparing previous virtual DOM with current Virtual DOM and takes what has changed and only updates the updated value(i.e, input box value) inside the Actual DOM*/}
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              let filteredList = listOfRestaurants.filter((res) => {
                return res.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
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
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Here we are returnig some piece of JSX in () */}
        {filteredRestaurants.map((restaurant) => (
          // WHen we are using two sub child components one inside another, Key should be present in parent component
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantContainer resObj={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
