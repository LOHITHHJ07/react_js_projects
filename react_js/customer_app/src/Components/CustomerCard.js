import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CustomerTool from "./CustomerTool";
import { useNavigate } from "react-router-dom";

function CustomerCard({ record }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`updateform/${record.id}`);
      }}
      sx={{
        minWidth: 600,
        minHeight: 240,
        m: 2,
        position: "relative",
        boxShadow: "1px 1px 10px #888888",
      }}
    >
      <CardContent sx={{ display: "flex" }}>
        <Typography
          sx={{ fontSize: 14, padding: 0, margin: 0 }}
          variant="h3"
          gutterBottom
        >
          {!!record?.fullName ? record?.fullName : ""}
        </Typography>
        <CardMedia
          component="img"
          sx={{
            width: 80,
            height: 80,
            position: "absolute",
            top: 40,
            left: 40,
          }}
          image="ws/rest/com.axelor.meta.db.MetaFile/130/content/download?image=true&v=0&parentId=130&parentModel=com.axelor.meta.db.MetaFile"
        />

        <Typography
          variant="body2"
          sx={{
            paddingLeft: "20px",
            display: "flex",
            justifyContent: "start",
            textAlign: "start",
            paddingTop: "40px",
            fontSize: "12px",
            position: "absolute",
            left: 140,
          }}
        >
          {record.registrationCode} <br />
          {record.mainAddress?.fullName} <br /> {record.fixedPhone}
          <br />
          {record.emailAddress?.name ?? ""} <br />{" "}
          {record.partnerCategory?.name ?? ""} <br /> Companies :{" "}
          {record.companyStr} <br />
          Fiscal position :
          <br />
        </Typography>
        <CustomerTool></CustomerTool>
      </CardContent>
      <CardActions
        sx={{
          paddingLeft: "400px",
          position: "absolute",
          left: 30,
          top: 200,
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#EF9D3F",
            margin: "0 0 4px 0",
            fontWeight: "600px",
            fontSize: "10px",
            maxHeight: "20px",
            maxWidth: "40px",
          }}
        >
          Customer
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#7D54FC",
            margin: "0 0 4px 0",
            fontWeight: "600px",
            fontSize: "10px",
            maxHeight: "20px",
            maxWidth: "40px",
            padding: "0px",
          }}
        >
          supplier
        </Button>
      </CardActions>
    </Card>
  );
}

export default CustomerCard;
