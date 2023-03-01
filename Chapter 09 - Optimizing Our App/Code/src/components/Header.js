import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  return true;
}

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={Logo}
      />
    </a>
  );
  
  const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    //console.log("UseEffect");
  },[]);

 //console.log("render");
  const isOnline = useOnline();
  return( 
   <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li> 
          </Link>
          <li>Cart</li>
          <Link to="/instamart">
          <li>Instamart</li> 
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>)
       : (<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
    </div>
  );
  };
  export default Header;