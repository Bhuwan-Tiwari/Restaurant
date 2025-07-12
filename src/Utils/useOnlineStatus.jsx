import { useEffect,useState } from "react";

const OnlineStatus =()=>
{
  const[OnlineStatus,SetOnlineStatus]=useState(true)

  useEffect(()=>{ window.addEventListener( "offline",()=>{SetOnlineStatus(false)}) }, [] )
  useEffect(()=>{window.addEventListener("online",()=>{SetOnlineStatus(true)})},[])
  return OnlineStatus;

}
  export default OnlineStatus;