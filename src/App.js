import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import respList from "./utils/mock-data";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// why we will use functions in our program---so that we can reuse

// Composite Composition---One component inside another component
const App = () => {
  return (
    <div>
      <Header styleCar={styleCard} />
      {/* Outlet is a component which is replaced by children route components based on route path provided */}
      <Outlet />
      {/* <Body respList={respList} /> */}
    </div>
  );
};

//App Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

// If we want to give JS inside JSX, we need to give in {}
//To give Inline styles---we have to give in JS Object(not Preferred way)
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Earlier, we are rendering App directly.
//root.render(<App />);
//Now instead of above, we will provide above render with Router configuration
root.render(<RouterProvider router={appRouter} />);
