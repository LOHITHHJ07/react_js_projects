import { useEffect, useState } from "react";
import { useAuth } from "./Authentication";
import { useNavigate, useLocation } from "react-router-dom";
const intialError = { userError: "", passError: "" };
const intialValues = { userName: "", password: "" };
localStorage.getItem("authflag");
function Login() {
  const [values, setValues] = useState(intialValues);
  const [error, setError] = useState(intialError);
  const [role, setRole] = useState();
  const [flag, setFlag] = useState(false);
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.path || "/";
  const updateName = (e) => {
    setValues((existingValues) => ({
      ...existingValues,
      userName: e.target.value,
    }));
  };
  const updatePassword = (e) => {
    setValues((existingValues) => ({
      ...existingValues,
      password: e.target.value,
    }));
  };
  useEffect(() => {
    localStorage.setItem("authflag", flag);
  }, [flag]);
  useEffect(() => {
    flag && navigate(redirect, { replace: true });
  }, [flag, redirect, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.userName <= 0) {
      setError((existingValues) => ({
        ...existingValues,
        userError: "username  is  required",
      }));
    }
    if (!values.password) {
      setError((existingValues) => ({
        ...existingValues,
        passError: "password is  required",
      }));
    } else if (values.password.length < 8) {
      setError((existingValues) => ({
        ...existingValues,
        passError: "password must be atleast eight characters",
      }));
    } else if (!values.password.match(/[0-9]/)) {
      setError((existingValues) => ({
        ...existingValues,
        passError: "password must contain atleast one digit ",
      }));
    } else if (role === "admin") {
      setFlag(true);
      auth.login(values.userName);
    }
  };
  return (
    <div>
      <div>
        <label>Username:</label>{" "}
        <input type="text" onChange={updateName}></input>{" "}
        <p> {error.userError}</p>
      </div>
      <div>
        <label>Password:</label>{" "}
        <input type="password" onChange={updatePassword}></input>{" "}
        <p> {error.passError}</p>
      </div>
      <div>
        <div> please specify your role</div>
        <span>
          <label htmlFor="role">Admin</label>
          <input
            type="radio"
            value="admin"
            name="role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <br />
          <label htmlFor="role">Guest</label>
          <input
            type="radio"
            value="guest"
            name="role"
            nChange={(e) => {
              setRole(e.target.value);
            }}
          />
        </span>
      </div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
export default Login;
