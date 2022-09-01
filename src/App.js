import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Authentication/Login/Login";
import Register from "./component/Authentication/Register/Register";
import Update from "./component/UserProfile/Update";
import UserProfile from "./component/UserProfile/UserProfile";
import Notify from "./shared/Notify/Notify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-profile/edit/:email" element={<Update />} />
      </Routes>
      <Notify />
    </div>
  );
}

export default App;
