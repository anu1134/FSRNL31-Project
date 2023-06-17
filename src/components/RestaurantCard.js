import { REST_IMG_URL } from "../../common/constants";

const RestaurantCard = (props) => {
  // destructuring
  const { name, cuisines, avgRating, cloudinaryImageId } = props.resDetails;

  //Template Literals

  return (
    <div className="res-card">
      <img
        className="restaurant-image"
        src={`${REST_IMG_URL}${cloudinaryImageId}`}
      ></img>
      <div className="res-details">
        <div>
          <h3> {name}</h3>
          <h4> {cuisines}</h4>
        </div>
        <div>
          <h4> {avgRating}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
