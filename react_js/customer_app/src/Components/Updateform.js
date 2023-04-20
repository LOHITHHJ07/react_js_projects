import React from "react";
import CustomerForm from "./CustomerForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function Updateform() {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const url = `ws/rest/com.axelor.apps.base.db.Partner/${id}/fetch`;
    fetch(url, {
      method: "POST",
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
        "Transfer-Encoding": "chunked",
        Authorization: "Basic YWRtaW46YWRtaW4=",
        "X-CSRF-Token": "ca0c8d4baf4543f1bf649af3327e4b1b",
      },
      body: JSON.stringify({
        _domain:
          "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
      }),
    })
      .then((response) => response.json())
      .then((record) => {
        setData(record.data[0]);
      });
  }, [id]);

  return data ? <CustomerForm data={data}></CustomerForm> : <Spinner></Spinner>;
}

export default Updateform;
