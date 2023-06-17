import { restaurant_info } from "./restaurant_info";
import { useEffect, useState } from "react";

const useRestaurantInfo = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  // Get data from API

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    // Make API call with restaurant id
    const data = restaurant_info;

    console.log(data);
    setRestaurantInfo(data[0]);

    console.log(restaurantInfo);
  }

  return restaurantInfo;
};

export default useRestaurantInfo;
