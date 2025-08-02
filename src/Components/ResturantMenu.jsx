import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../Utils/useRestaurantMenu";
// const ResturantMenu = () => {
//   const { resId } = useParams();
//   const data = useResturantMenu(resId);
//   console.log("data is", data);
//   if(data===null) return<Shimmer/>

//   return (
//     <div style={{ padding: "200px" }}>
//       <h1>Here will be the restaurant menu</h1>
//     </div>
//   );
// };

// export default ResturantMenu;



// import {
//   FOODFIRE_MENU_API_URL,
//   IMG_CDN_URL,
//   ITEM_IMG_CDN_URL,
//   MENU_ITEM_TYPE_KEY,
//   RESTAURANT_TYPE_KEY,
// } from "../Utils/constant";

// import useResMenuData from "../Hooks/useResMenuData"; // imported custom hook useResMenuData which gives restaurant Menu data from swigy api


const RestaurantMenu = () => {
  // const [ menuItems] = useResMenuData(
  //   FOODFIRE_MENU_API_URL,
  //   resId,
  //   RESTAURANT_TYPE_KEY,
  //   MENU_ITEM_TYPE_KEY
  // );

    const { resId } = useParams();  // call useParams and get value of restaurant id using object destructuring
  const data = useResturantMenu(resId);
  console.log("data is", data);
  if(data===null) return<Shimmer/>
  let menuItems= data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards 
  let restaurant= data.data.cards[2].card.card.info

  return(
    <div className="restaurant-menu">
       

             <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item.card.info?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item.card.info?.name}</h3>
                  <p className="item-cost">
                    {item.card.info?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item.card.info?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item.card.info?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item.card.info?.imageId && (
                    <img
                      className="menu-item-img"
                      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info?.imageId}   //ITEM_IMG_CDN_URL
                      alt={item.card.info?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
