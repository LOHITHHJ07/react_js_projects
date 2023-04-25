import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CustomerHome from "./Components/CustomerHome";
import { useEffect, useState } from "react";
import "./App.css";
import CustomerForm from "./Components/CustomerForm";

function App() {
  const [data, setData] = useState([]);

  const api = {
    search: async function () {
      const url = "ws/rest/com.axelor.apps.base.db.Partner/search";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          connection: "keep-alive",
          "Content-Type": "application/json",
          Authorization: "Basic YWRtaW46YWRtaW4=",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    },
  };

  useEffect(() => {
    api.search().then((record) => {
      setData(record.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<CustomerHome data={data} />} />
        <Route path="/new" element={<CustomerForm />} />
        <Route path="/:id" element={<CustomerForm />} />
      </Routes>
    </div>
  );
}

export default App;
