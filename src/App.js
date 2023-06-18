import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import respList from "./utils/mock-data";

// why we will use functions in our program---so that we can reuse

// Composite Composition---One component inside another component
const App = () => {
  return (
    <div>
      <Header styleCar={styleCard} />
      <Body respList={respList} />
    </div>
  );
};

// If we want to give JS inside JSX, we need to give in {}
//To give Inline styles---we have to give in JS Object(not Preferred way)
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
