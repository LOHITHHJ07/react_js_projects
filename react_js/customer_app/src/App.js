import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CustomerHome from "./Components/CustomerHome";
import Updateform from "./Components/Updateform";
import AddCustomer from "./Components/AddCustomer";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "ws/rest/com.axelor.apps.base.db.Partner/search";
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
        setData(record.data);
      });
  }, []);
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<CustomerHome data={data} />} />
        <Route path="/newform" element={<AddCustomer data={data} />} />
        <Route path="updateform/:id" element={<Updateform />} />
      </Routes>
    </div>
  );
}

export default App;
