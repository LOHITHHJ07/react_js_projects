import React from "react";

function Inputcomp(props) {
  const { type, id, name, onChange } = props;
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      style={{ textAlign: "start" }}
    ></input>
  );
}

export default Inputcomp;
