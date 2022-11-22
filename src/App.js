import { useState } from "react";
import "./App.css";
import GetUsers from "../src/components/async/GetUsers";
import Register from "./components/authentication/Register";
import Logout from "./components/authentication/Logout";
import Login from "./components/authentication/Login";
function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      sharry
      <GetUsers setUsers={setUsers} />
      {users && <p>fetched all users</p>}
      {/* <button onClick={() => register()}>register</button> */}
      {/* {users.length > 0 && <DeleteUser />} */}
      {/* {users.length > 0 && <UpdateUser />} */}
      {/* <p>{auth.currentUser.email}</p> */}
      <Register />
      <Logout />
      <Login />
    </div>
  );
}

export default App;
