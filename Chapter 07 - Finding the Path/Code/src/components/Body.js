import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filterData);
  return filterData;
}

const Body = () => {

  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([ ]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API Call
    getRestaurant();
;  },[]);

async function getRestaurant(){
  const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5993483&lng=73.762495&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}

console.log("render()");

//not render component (Early Retun)
if(!allRestaurants) return null;


return allRestaurants.length === 0 ? (
    <Shimmer/>

  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
          
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
              <Link to={"restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data}  />
              </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;