import React, { useState } from "react";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.path || "/";
  const handleLogin = (value) => {
    auth.login(user);
    navigate(redirect, { replace: true });
  };
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
