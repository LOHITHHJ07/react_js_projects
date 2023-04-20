import CustomerCard from "./CustomerCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function CustomerHome({ data }) {
  return (
    <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
      <Grid
        container
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex",
          justifyContent: "start",
          paddingTop: "40px",
          paddingLeft: "25px",
        }}
      >
        {data.map((record) => (
          <CustomerCard record={record} key={record.id} />
        ))}
      </Grid>
    </Box>
  );
}

export default CustomerHome;
