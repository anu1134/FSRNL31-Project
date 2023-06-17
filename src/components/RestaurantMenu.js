import { useParams } from "react-router-dom";
import { REST_IMG_URL } from "../../common/constants";
import useRestaurantInfo from "../../common/useRestaurantInfo";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurantInfo(params.id);

  console.log("restaurant", restaurant);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1>Restaurant Id : {params.id}</h1>
        <img src={`${REST_IMG_URL}${restaurant.cloudinaryImageId}`}></img>
        <h2>{restaurant.name}</h2>
        <h2>{restaurant.city}</h2>
      </div>
      <div class="menu-list">
        <h2> Menu :</h2>
        <h3> {restaurant.menu.items[0].name}</h3>
        <h3> {restaurant.menu.items[1].name}</h3>
        <h3> {restaurant.menu.items[0].name}</h3>
        <h3> {restaurant.menu.items[1].name}</h3>
        <h3> {restaurant.menu.items[0].name}</h3>
        <h3> {restaurant.menu.items[1].name}</h3>
        <h3> {restaurant.menu.items[0].name}</h3>
        <h3> {restaurant.menu.items[1].name}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
