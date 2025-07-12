const ResturantCard=(props)=>{
// props is {
//   info: {
//     id: "118348",
//     name: "Pizza Hut",
//     cuisines: ["Pizzas", "Beverages"],
//     // ...other details
//   }
// }
  const{cloudinaryImageId,name,costForTwo,cuisines,avgRating,locality,sla}=props.info;
  const{deliveryTime}=sla;
  return(
    <div className="card" >
     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }alt="THumbnail image" />
     <h3>{name}</h3>
     <h1>{cuisines.join(", ")}</h1>
     <h4>{avgRating}</h4>
     <h4>{costForTwo}</h4>
     <h4>{deliveryTime}</h4>
     <h4>{locality}</h4>
    </div>
  )
}


export default ResturantCard