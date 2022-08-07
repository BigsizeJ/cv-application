import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Resume from "./components/Resume";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <div className="container">
      <Header />
      <Resume />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
