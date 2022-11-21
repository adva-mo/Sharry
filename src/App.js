// import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./utils/database-config.js";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "users"); //reference to which collection are we importing

  useEffect(() => {
    console.log("get");
    getUsers();
  }, []);

  const getUsers = async () => {
    console.log("get");
    try {
      const response = await getDocs(usersCollection);
      console.log(response);
      setUsers(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (e) {}
  };

  return (
    <div>
      sharry
      {/* {users.map(())} */}
      {console.log(users)}
    </div>
  );
}

export default App;

// doc.data() function from the firestore library which returns object containing the user info without the id
