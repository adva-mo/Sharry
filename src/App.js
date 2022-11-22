import { useState } from "react";
import "./App.css";
import GetUsers from "../src/components/async/GetUsers";
import AddNewUser from "./components/async/AddNewUser";
import UpdateUser from "./components/async/UpdateUser";
import DeleteUser from "./components/async/DeleteUser";
//*----- auth functions:
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils/database-config";

function App() {
  const [users, setUsers] = useState([]);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const register = async () => {
    console.log("register func");
    const email = "test@test.com";
    const password = "test12345";
    try {
      //*when creating a new account, the user will be logged in authomatically and the
      //* user information will be stored in the user variable
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (e) {
      //*firebase does the validations for email
      // "test@test.com" - passed
      console.log(e.message);
    }
  };
  const login = async () => {};

  const logout = async () => {};

  return (
    <div>
      sharry
      <GetUsers setUsers={setUsers} />
      <button onClick={() => register()}>register</button>
      {/* {users.length > 0 && <DeleteUser />} */}
      {/* {users.length > 0 && <UpdateUser />} */}
      <p>{auth.currentUser.email}</p>
    </div>
  );
}

export default App;
