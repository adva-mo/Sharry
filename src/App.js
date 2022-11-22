import { useState } from "react";
import "./App.css";
import GetUsers from "../src/components/async/GetUsers";
import Register from "./components/authentication/Register";
import Logout from "./components/authentication/Logout";
import Login from "./components/authentication/Login";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      sharry
      <Navbar />
      <GetUsers setUsers={setUsers} />
      {users && <p>fetched all users</p>}
    </div>
  );
}

export default App;
