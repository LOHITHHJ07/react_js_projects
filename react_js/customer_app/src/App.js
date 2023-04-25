import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CustomerHome from "./Components/CustomerHome";
import { useEffect, useState } from "react";
import "./App.css";
import CustomerForm from "./Components/CustomerForm";
import api from "./api.js";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.search("com.axelor.apps.base.db.Partner").then((record) => {
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
