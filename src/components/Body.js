import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../../common/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../../common/useOnline";
import { filterData } from "../../common/helper";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // State variables ----> why we use state???
  // React monitors state variables and then rerenders the page
  useEffect(() => {
    getRestaurants();
  }, []);

  // useEffect takes two params --- > callback function , dependency array

  async function getRestaurants() {
    setTimeout(() => {
      const data = restaurants;
      setAllRestaurants(data);
      setFilteredRestaurants(data);
    }, 1000);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline , Please check your Internet Connection</h1>;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Body">
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search"
            className="search"
            value={searchText}
          ></input>
          <button
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"restaurant/" + restaurant.id}>
                <RestaurantCard key={restaurant.id} resDetails={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

// Node Js
