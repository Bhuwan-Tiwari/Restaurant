import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
const [btnNameReact,setbtnNameReact]=useState("Login")

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="logo" src="https://logowik.com/content/uploads/images/chef-restaurant5078.logowik.com.webp"/>
      </div>
      <div  className="nav-items">
        <ul>
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us </Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">🛒</Link ></li>
          
          <button className="logInOutbtn" 
          onClick={()=>{
            btnNameReact=== "Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")
          }}
          >
            {btnNameReact}
          </button>
        </ul>
        </div>        
    </div>
  );
};
export default Header