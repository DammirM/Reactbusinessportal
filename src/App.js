import './App.css';
import { Routes, Route } from "react-router-dom"
import UserPortal from "./Components/UserPortal"
import UserRequest from "./Components/UserRequest"


function App() {
  return (
    <Routes>
      <Route path="/" element={<UserPortal />}></Route>
    </Routes>

  );
}

export default App;
