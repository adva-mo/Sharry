import { Route, NavLink, Routes, Navigate } from "react-router-dom";

import React from "react";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import "./App.css";
import ProductDetail from "./components/ProductDetail";

//! npm rauter is a library that helps us create differnet paths on our url and mainpulate the brower accordinally
// we are ble to load different paths of the url and display different components each path
// the Route we are omporting from react-router-dom is actually a component
// adittionally, we need to import the browserRouter inside our index.js
// normally well store those router components in seperate folder normally pages/
//? to use in css for navLink:
// a.active {
//   color: red;
// }
//? what to render i the index.js file:

// const elementRoot = document.getElementById("root");
// const root = ReactDOM.createRoot(elementRoot);
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

//! ugrading from v#5=>v#6:
//* switch = > routes
//*

/* <Route path="/welcome">
            <Welcome />
          </Route> */

// becomes => <Route path="/welcome" element{<Welcome />}/>
//* we dont use the "exact" prop anymore, its a default
//* if we do want that every path that starts with ".." we wiil use => <Route path="/products/*" element={<Products />} />
//* order of routes doesnt matter anymore
//* we dont have the active class name anymore, instead:
/* <NavLink
  className={(navData) => (navData.isActive ? "active" : "")}
  to={"/welcome"}
>
  Welcome
</NavLink>; */

//* rediredct => navigate

function MainHeader() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={"/welcome"}
          >
            Welcome
          </NavLink>
          ;
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={"/products"}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function App() {
  // the Route component will make sure that the elemnt inside its tags
  // will be rendered only when our url path is welcome
  // its bettee to build our router sa folder and subfoldres
  // if we want to display one router at a time we will use the switch component
  //? when using Switch react will look for the first match that starts with the path and displays it
  //? the exact prop is use when we want to diaply the route only if it matchs perfectly to the path
  //! we can also create nested Routes
  // ITS BETTER TO PROVIDE A PATH IF THE USER ENTERD WRONG ADRESS BY ASSIGING "/" PATH
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
