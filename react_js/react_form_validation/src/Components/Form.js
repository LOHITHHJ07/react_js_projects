import { useState } from "react";
import "./Form.css";
function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setuserError] = useState("");
  const [passError, setpassError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length <= 0) {
      setuserError(" username is required");
    } else {
      setuserError("");
    }
    if (!password) {
      setpassError(" Password is required");
    } else if (password.length < 8) {
      setpassError("Password must be atleast 8 characters long");
    } else if (!password.match(/[0-9]/)) {
      setpassError("Password must contains atleast one digit");
    } else {
      setpassError("");
    }
  };
  return (
    <div>
      <h1> Form validation using react js</h1>
      <form onSubmit={handleSubmit}>
        <table className="form-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">Username</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  id="username"
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
                <div className="error">{userError}</div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                {passError && <div className="error"> {passError}</div>}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="city">
                  <span>City of</span> <br />
                  <span> employement</span>{" "}
                </label>
              </td>
              <td>
                <input type="text" name="city" id="city"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="webserver"> Web server</label>
              </td>
              <td>
                <select name="webserver" id="webserver">
                  <option value="none">---------choose server----------</option>
                  <option value="Apache">Apache</option>
                  <option value="IIS">IIS</option>
                  <option value="Jagsaw">Jagsaw</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                please <br /> specify your role{" "}
              </td>
              <td id="role">
                <label htmlFor="admin">
                  <input type="radio" name="role" id="admin" />
                  Admin{" "}
                </label>
                <label htmlFor="engineer">
                  <input type="radio" name="role" id="engineer" />
                  Engineer
                </label>
                <label htmlFor="manager">
                  <input type="radio" name="role" id="manager" />
                  Manager
                </label>
                <label htmlFor="guest">
                  <input type="radio" name="role" id="guest" />
                  Guest
                </label>
              </td>
            </tr>
            <tr>
              <td>
                Single Sign-on <br /> to the following{" "}
              </td>

              <td id="sign-in">
                <label htmlFor="Mail">
                  {" "}
                  <input type="checkbox" name="sign" id="mail" />
                  Mail
                </label>
                <label htmlFor="Payroll">
                  {" "}
                  <input type="checkbox" name="sign" id="payroll" />
                  Payroll{" "}
                </label>
                <label htmlFor="Self-service">
                  <input
                    type="checkbox"
                    name="sign"
                    id="self-servichtmlFor>Self-service"
                  />
                  Self-service{" "}
                </label>
              </td>
            </tr>

            <tr>
              <td></td>
              <td id="log">
                <button type="submit">Login</button>{" "}
                <button type="reset">Reset </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Form;
