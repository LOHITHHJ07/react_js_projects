import React from "react";

function Labelcomp(props) {
  const { labelfor, label_firstline, label_secondline } = props;
  return (
    <label htmlFor={labelfor} style={{ minWidth: "250px" }}>
      <span>{label_firstline}</span> <br />
      <span>{label_secondline} </span>
    </label>
  );
}

export default Labelcomp;
