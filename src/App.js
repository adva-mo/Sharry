import { useState } from "react";
import "./App.css";
import GetUsers from "../src/components/async/GetUsers";
import AddNewUser from "./components/async/AddNewUser";
import UpdateUser from "./components/async/UpdateUser";
import DeleteUser from "./components/async/DeleteUser";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      sharry
      <GetUsers setUsers={setUsers} />
      {/* {users.length > 0 && <DeleteUser />} */}
      {/* {users.length > 0 && <UpdateUser />} */}
    </div>
  );
}

export default App;
