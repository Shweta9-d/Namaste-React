import React, { createElement as ce } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
// React element is an object

const heading = ce("h1", {}, "Namaste React");




const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

//Styling in React
// const jsx = (
//     <div style={{
//         backgroundColor : "red "
//     }}>
//         <h1>
//             JSX
//         </h1>
//         <h1>Second JSX</h1>
//     </div>
// )

// This is place where I want my application to run that is root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<AppLayout />);

/**
                  Header
                      - Logo
                      - Nav Items(Right Side)
                      - Cart
                  Body
                      - Search bar
                      - ReastrauntList
                          - RestaurantCard
                              - Image
                              - Name
                              - Rating
                              - Cuisine
                  Footer
                      - Links
                      - Copyrights
              */
