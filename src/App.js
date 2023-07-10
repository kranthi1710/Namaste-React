import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import respList from "./utils/mock-data";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// Chunking
// Code splitting
// Dynamic loading
// lazy loading
// On Demand loading

// lazy is named import from react, It takes a callback function. This callback function takes import function which takes path of lazy loaded bundle/component/module.
// In large apps, we have thousands of files, we will make them into smaller bundles. THis process is known as chuncking/code splitting/dynamic bundling/dynamic loading/lazy loading/on demand loading

// LOgical separation of bundles----> A bundle should have enough code for a feature.In makeMyTrip app, we can make a bundle for flights feature, Hotels feature etc.
const About = lazy(() => import("./components/About"));

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
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
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
