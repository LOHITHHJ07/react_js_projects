import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CustomerTool from "./CustomerTool";
import styles from "./CustomerCard.module.css";
import { useNavigate } from "react-router-dom";

function CustomerCard({ record }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/${record.id}`);
      }}
      className={styles.card}
    >
      <CardContent className={styles.Cardcontent}>
        <Typography className={styles.fullname} variant="h3" gutterBottom>
          {record?.fullName ?? ""}
        </Typography>
        <CardMedia className={styles.cardimg} component="img" />
        <div className={styles.cardbody}>
          <ul className={styles.list}>
            <li> {record.registrationCode}</li>
            <li>{record.mainAddress?.fullName} </li>
            <li> {record.fixedPhone}</li>
            <li> {record.emailAddress?.name ?? ""} </li>
            <li> {record.partnerCategory?.name ?? ""}</li>
            <li>Companies : {record.companyStr}</li>
            <li> Fiscal position :{record?.fiscalPosition?.name ?? ""}</li>
          </ul>
        </div>

        <CustomerTool></CustomerTool>
      </CardContent>
    </Card>
  );
}

export default CustomerCard;
