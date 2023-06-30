import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../../common/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../../common/useOnline";
import { filterData } from "../../common/helper";
import { useQuery } from "react-query";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  /* const { isLoading, data, error } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => {
      return fetch(
        "https://restaurant-project1.onrender.com/api/restaurants"
      ).then((res) => {
        res.json().then((restaurants) => {
          console.log(restaurants);
          return restaurants;
        });
      });
    },
  }); */

  // State variables ----> why we use state???
  // React monitors state variables and then rerenders the page
  useEffect(() => {
    getRestaurants();
  }, []);

  // useEffect takes two params --- > callback function , dependency array

  function getRestaurants() {
    fetch("https://restaurant-project1.onrender.com/api/restaurants")
      .then((res) => res.json())
      .then((restaurants) => {
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      })
      .catch((err) => console.log(err));
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
        <div className="top-restaurants-bar">
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

          <div className="top-rated-restaurants">
            <button
              onClick={() => {
                // Filter restaurants which have rating more than 4.2
                const filterRest = filteredRestaurants.filter(
                  (restaurant) => restaurant.starRating > 4.2
                );
                setFilteredRestaurants(filterRest);
              }}
            >
              Top rated restaurants
            </button>
          </div>
        </div>
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"restaurant/" + restaurant._id}>
                <RestaurantCard key={restaurant._id} resDetails={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

// Node Js
