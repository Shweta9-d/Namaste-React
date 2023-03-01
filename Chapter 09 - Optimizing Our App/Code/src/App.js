import React, { createElement as ce,lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
//import About from "./components/About";
import ErrorMsg from "./components/ErrorMsg";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile"
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart"

//lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<h1>Loading...</h1>}><AppLayout/></Suspense>,
    errorElement: <ErrorMsg />,
    children:[
      {
        path:"/about",
        element:<About />,
        children:[{
          path:"profile",
          element:<Profile />,
        }]
      },
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ]
  },

])

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
root.render(<RouterProvider router ={appRouter}/>);

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
