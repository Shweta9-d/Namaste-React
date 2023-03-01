import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

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

//console.log("render()");

const isOnline = useOnline();

 if(!isOnline){
  return <h1>Check internet connection</h1>
 }
//not render component (Early Retun)
if(!allRestaurants) return null;


return allRestaurants.length === 0 ? (
    <Shimmer/>

  ) : (
    <>
      <div className="p-5 bg-rose-50 my-5 ">
        <input
          type="text"
          className="p-2 m-2 focus:bg-rose-200"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-rose-300 hover:bg-rose-500 text-white rounded-md"
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
      <div className="flex flex-wrap">
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