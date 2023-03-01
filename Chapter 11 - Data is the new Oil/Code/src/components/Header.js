import { useContext, useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
  return true;
}

const Title = () => (
    <a href="/">
      <img
        className="h-28 px-2  "
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
 
  const {user} = useContext(UserContext);

  return( 
   <div className="flex justify-between bg-rose-200 shadow-lg sm:bg-blue-200 md:bg-slate-300">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
          <li className="px-2">Contact</li> 
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
          <li className="px-2">Instamart</li> 
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>)
       : (<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
    </div>
  );
  };
  export default Header;