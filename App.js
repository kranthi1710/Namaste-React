import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h2>We are IN</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
