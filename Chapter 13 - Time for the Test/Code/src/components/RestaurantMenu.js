import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    
    const {id}  = useParams();

    //const [restaurant,setRestauraunt] = useState(null);
    
    const restaurant = useRestaurant(id);
    
    const dispatch = useDispatch();

    // const handleAddItem = () => {
    //     dispatch(addItem("Grapes"));
    // }

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    };
    
    return !restaurant ? <Shimmer /> : (
        <div className="flex">
            <div>
                <h1>Restaurant id : {id}</h1>
                <h2>{restaurant?.name}</h2>
                 <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            {/* <div>
                <button className="p-5 m-5 bg-green-100" onClick={()=>handleAddItem()}>Add Item</button>
            </div> */}
            <div className="p-5">
                <h1>Menu</h1>
                <ul data-testid="menu">
                     {Object.values(restaurant?.menu?.items).map((item) => (
                      <li key={item.id}>{item.name} - {" "} 
                      <button 
                      data-testid="addBtn"
                      className="p-1 bg-green-50"
                       onClick={()=>addFoodItem(item)}>
                        Add Item
                        </button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;