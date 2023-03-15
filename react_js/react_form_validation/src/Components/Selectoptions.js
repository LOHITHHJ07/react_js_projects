import React from "react";

function Selectoptions() {
  return (
    <select name="webserver" id="webserver">
      <option value="none">---------choose server----------</option>
      <option value="Apache">Apache</option>
      <option value="IIS">IIS</option>
      <option value="Jagsaw">Jagsaw</option>
    </select>
  );
}

export default Selectoptions;
