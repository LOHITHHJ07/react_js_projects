import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CustomerTool from "./CustomerTool";
import Styles from "./CustomerCard.module.css";
import { useNavigate } from "react-router-dom";

function CustomerCard({ record }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/${record.id}`);
      }}
      className={Styles.card}
    >
      <CardContent className={Styles.Cardcontent}>
        <Typography className={Styles.fullname} variant="h3" gutterBottom>
          {record?.fullName ?? ""}
        </Typography>
        <CardMedia className={Styles.cardimg} component="img" />
        <Typography variant="body2" className={Styles.cardbody}>
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
      <CardActions className={Styles.buttonaction}>
        <Button variant="contained" size="small" className={Styles.button}>
          Customer
        </Button>
        <Button variant="contained" size="small" className={Styles.button}>
          supplier
        </Button>
      </CardActions>
    </Card>
  );
}

export default CustomerCard;
