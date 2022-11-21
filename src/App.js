import { useState } from "react";
import "./App.css";
import GetUsers from "../src/components/async/GetUsers";
import AddNewUser from "./components/async/AddNewUser";
import UpdateUser from "./components/async/UpdateUser";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      sharry
      <GetUsers setUsers={setUsers} />
      {/* {users.length > 0 && <AddNewUser />} */}
      {/* {users.length > 0 && <UpdateUser />} */}
    </div>
  );
}

export default App;

// doc.data() function from the firestore library which returns object containing the user info without the id
