import ResturantCard from "./ResturantCard";
import resData from "../Utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable
  const [RestaurantList, SetRestaurantList] = useState(resData);
  const [SearchText, SetSearchtext] = useState("");

  //whenever state varibles update, react triggers a reconcilaton cycle(re-rendering )
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //tp by pass the cors error either use extension or use cors plugin.io intial link in the begin of link
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1196607&lng=85.390982&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      console.log("data is", data);
      const json = await data.json();
      console.log("json is", json);
      SetRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      //SetRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //optional chaning
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  if (RestaurantList.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="search-container">
        <div className="search">  
          <input
            type="text"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={SearchText} //first onchange update the text in searchtext then value={SearchText}  get the updated value of the searchText
            onChange={(e) => {
              // update the state variable searchText when we typing in input box
              SetSearchtext(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(SearchText);
              let intialResList=resData  //another way create one more state varible name as filterResturant
              const filteredResturant = intialResList.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()))
             console.log("filteredResturant",filteredResturant)
              if(filteredResturant.length == 0)
              SetRestaurantList(resData)
              else
              SetRestaurantList(filteredResturant)

            }}
          >
            Search
          </button>
        </div>

        <button
          className="btn-filter"
          onClick={() => {
            const FilterRes = RestaurantList.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            SetRestaurantList(FilterRes);
          }}
        >
          4.2+ ratings
        </button>
      </div>
      <div className="restaurant-list">
        {RestaurantList.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/"+ resturant.info.id}><ResturantCard info={resturant.info} />  </Link> //imp
        ))}
      </div>
    </div>
  );
};
export default Body;
