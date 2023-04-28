import CustomerCard from "./CustomerCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Styles from "./CustomerHome.module.css";
import api from "../api.js";
import { useEffect, useState } from "react";

function CustomerHome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.search("com.axelor.apps.base.db.Partner").then((record) => {
      setData(record.data);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
      <Grid
        className={Styles.home}
        container
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((record) => (
          <CustomerCard record={record} key={record.id} />
        ))}
      </Grid>
    </Box>
  );
}

export default CustomerHome;
