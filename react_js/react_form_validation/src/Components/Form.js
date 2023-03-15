import Textfield from "./Textfield";
import { useState } from "react";
import styles from "./Form.module.css";
import Labelcomp from "./Labelcomp";
import Selectoptions from "./Selectoptions";

const intialError = { userError: "", passError: "" };
const intialValues = { userName: "", password: "" };

function Form() {
  const [values, setValues] = useState(intialValues);
  const [Error, setError] = useState(intialError);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.userName.length <= 0) {
      setError((existingValues) => ({
        ...existingValues,
        userError: "username  is  required",
      }));
    } else {
      setError(intialError);
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
    }
  };

  return (
    <div>
      <h1 className={styles.h1}> Form validation using react js</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formTable}>
          <div>
            <Textfield
              className={styles.formTable}
              type="text"
              id="username"
              name="name"
              onChange={updateName}
              label_first="username"
              fieldName="username"
            ></Textfield>
            <div className={styles.error}>{Error.userError}</div>
          </div>
          <div>
            <Textfield
              className={styles.formTable}
              type="password"
              id="password"
              name="name"
              onChange={updatePassword}
              label_first="password"
              fieldName="password"
            ></Textfield>
            {Error && <div className={styles.error}> {Error.passError}</div>}
          </div>
          <div>
            <Textfield
              className={styles.formTable}
              type="text"
              id="city"
              name="city"
              label="city"
              fieldName="city of employment"
              label_first="city of"
              label_second="employment"
            ></Textfield>
          </div>

          <div className={styles.general}>
            <Labelcomp
              labelfor="web server"
              label_firstline="web server"
            ></Labelcomp>
            <Selectoptions></Selectoptions>
          </div>
          <div className={styles.general}>
            <Labelcomp
              labelfor="role"
              label_firstline="please"
              label_secondline="specify your role"
            ></Labelcomp>
            <div>
              <Textfield
                type="radio"
                name="role"
                id="admin"
                fieldName="admin"
                label_first="admin"
              ></Textfield>
              <Textfield
                type="radio"
                name="role"
                id="engineer"
                fieldName="engineer"
                label_first="engineer"
              ></Textfield>
              <Textfield
                type="radio"
                name="role"
                id="manager"
                fieldName="manager"
                label_first="manager"
              ></Textfield>
              <Textfield
                type="radio"
                name="role"
                id="guest"
                fieldName="guest"
                label_first="guest"
              ></Textfield>
            </div>
          </div>
          <div className={styles.general}>
            <Labelcomp
              labelfor="sign-in"
              label_firstline="sign-on"
              label_secondline="the following"
            ></Labelcomp>
            <div>
              <Textfield
                className={styles.sign}
                type="checkbox"
                name="sign"
                id="mail"
                fieldName="mail"
                label_first="mail"
              ></Textfield>
              <Textfield
                className={styles.sign}
                type="checkbox"
                name="sign"
                id="payroll"
                fieldName="payroll"
                label_first="payroll"
              ></Textfield>
              <Textfield
                className={styles.sign}
                type="checkbox"
                name="sign"
                id="self-service"
                fieldName="self-service"
                label_first="self-service"
              ></Textfield>
            </div>
          </div>
          <div className={styles.general}>
            <div></div>
            <div className={styles.log}>
              <button type="submit">Login</button>{" "}
              <button
                type="reset"
                onClick={() => {
                  setError(intialError);
                }}
              >
                Reset{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
