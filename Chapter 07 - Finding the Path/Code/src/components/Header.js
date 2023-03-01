import { useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";

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
    console.log("UseEffect");
  },[]);

  console.log("render");

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
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>)
       : (<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
    </div>
  );
  };
  export default Header;