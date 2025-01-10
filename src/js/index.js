//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/navbar.jsx"
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./component/cards.jsx";


const App = () => {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Cards/>
      </>
    );
  };
//render your react application
ReactDOM.createRoot(document.getElementById('app')).render( <App/>);

