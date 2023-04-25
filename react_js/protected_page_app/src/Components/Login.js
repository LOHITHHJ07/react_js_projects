import { useEffect, useState } from "react";
import { useAuth } from "./Authentication";
import { set } from "./storage.js";
import { useNavigate, useLocation } from "react-router-dom";
const intialError = { userError: "", passError: "" };
const intialValues = { userName: "", password: "" };
function Login() {
  const [values, setValues] = useState(intialValues);
  const [error, setError] = useState(intialError);
  const [role, setRole] = useState();
  const [flag, setFlag] = useState(false);
  const auth = useAuth();
  const location = useLocation();
  console.log(location.state.path);
  const navigate = useNavigate();
  const redirect = location.state?.path || "/";
  console.log(redirect);
  const updateForm = (e) => {
    setValues((existingValues) => ({
      ...existingValues,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    set("authflag", flag);
  }, [flag]);
  const handleSubmit = (e) => {
    const error = { ...intialError };

    e.preventDefault();
    if (values.userName <= 0) {
      error.userError = "username  is  required";
    }
    if (!values.password) {
      error.passError = "password is  required";
    } else if (values.password.length < 8) {
      error.passError = "password must be atleast eight characters";
    } else if (!values.password.match(/[0-9]/)) {
      error.passError = "password must contain atleast one digit ";
    } else if (role === "admin") {
      setFlag(true);
      auth.login(values.userName);
      navigate(redirect, { replace: true });
    }
    setError(error);
  };
  return (
    <div>
      <div>
        <label>Username:</label>{" "}
        <input
          type="text"
          name="userName"
          value={values.userName}
          onChange={updateForm}
        ></input>{" "}
        <p> {error.userError}</p>
      </div>
      <div>
        <label>Password:</label>{" "}
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={updateForm}
        ></input>{" "}
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
            onChange={(e) => {
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
