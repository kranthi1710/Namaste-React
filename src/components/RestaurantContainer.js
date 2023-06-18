// Destructuring on the fly instead of props
//const RestaurantContainer = ({ resName, cuisineName }) => {
// const { resName, cuisineName } = props;

//res.cloudinary.com-----CDN which all images of swiggy are stored and used
import { CDN_URL } from "../utils/constants";

const RestaurantContainer = (props) => {
  const { resObj } = props; // this resObj must be same as key name when passing from other component
  const { cloudinaryImageId, name, avgRating, cuisines } = resObj?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* As CDN_URL below is javascript variable, we need to keep it i curly braces */}
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantContainer;
