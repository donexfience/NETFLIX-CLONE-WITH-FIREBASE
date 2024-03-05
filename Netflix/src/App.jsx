import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectRouter from "./components/ProtectRouter";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/account" element={<ProtectRouter><Account /></ProtectRouter>}></Route>
          <Route path="/video" element={<Movie/>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
