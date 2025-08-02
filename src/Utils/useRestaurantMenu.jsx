import { useEffect,useState } from "react";
import { MENU_API }  from "../Utils/constant"


const useResturantMenu = (resId)=>
{
  const[resInfo, setInfo]= useState(null)
  useEffect(() => {fetchMenu()}, []);
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    );
    const json = await data.json();
    console.log("resInfo data is", json);
    setInfo(json)
  };
  return resInfo
}

export default useResturantMenu

