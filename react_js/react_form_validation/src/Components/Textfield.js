import React from "react";
import Inputcomp from "./Inputcomp";
import Labelcomp from "./Labelcomp";
import styles from "./Textfield.module.css";

function Textfield(props) {
  const { type, id, name, onChange, label_first, label_second, fieldname } =
    props;
  if (type === "radio" || type === "checkbox") {
    return (
      <div className={styles.span}>
        <span>
          <Inputcomp
            type={type}
            id={id}
            name={name}
            onChange={onChange}
          ></Inputcomp>
        </span>
        <span>
          <Labelcomp
            labelfor={fieldname}
            label_firstline={label_first}
            label_secondline={label_second}
          ></Labelcomp>
        </span>
      </div>
    );
  }
  return (
    <div className={styles.input}>
      <Labelcomp
        labelfor={fieldname}
        label_firstline={label_first}
        label_secondline={label_second}
      ></Labelcomp>
      <Inputcomp
        type={type}
        id={id}
        name={name}
        onChange={onChange}
      ></Inputcomp>
    </div>
  );
}

export default Textfield;
