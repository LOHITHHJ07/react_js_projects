import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Authentication";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
