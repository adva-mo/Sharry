// import { async } from "@firebase/util";
import { useState } from "react";
import "./App.css";
import GetUsers from "../src/components/async/GetUsers";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      sharry
      <GetUsers setUsers={setUsers} />
      {users.length > 0 && <p>ok</p>}
    </div>
  );
}

export default App;

// doc.data() function from the firestore library which returns object containing the user info without the id
