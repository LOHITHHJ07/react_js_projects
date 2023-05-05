import CustomerCard from "./CustomerCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Styles from "./List.module.css";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import api from "../api.js";
import { useEffect, useState } from "react";

function List({ searchText }) {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let limit = 9;
  let maxItem = 100;

  useEffect(() => {
    setLoading(true);
    api
      .search("com.axelor.apps.base.db.Partner", {
        body: {
          data: {
            criteria: [
              {
                fieldName: "fiscalPosition.code",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "fullName",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "fixedPhone",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "companyStr",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "mainAddress.fullName",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "picture.fileName",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "partnerCategory.name",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "emailAddress.address",
                operator: "like",
                value: `${searchText}`,
              },
              {
                fieldName: "registrationCode",
                operator: "like",
                value: `${searchText}`,
              },
            ],
            operator: "or",
            _domain:
              "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
            _searchText: searchText,
          },
        },
        offset: (page - 1) * limit,
        limit,
        total: maxItem,
      })
      .then((record) => {
        setData(record.data ?? []);
        setTotal(record.total);
        setLoading(false);
      });

    if (searchText) {
      setPage(1);
    }
  }, [page, searchText]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: "auto",
      }}
    >
      <Box>
        <Button
          className={Styles.button}
          variant="contained"
          onClick={() => {
            setPage((page) => page - 1);
          }}
          disabled={page === 1}
        >
          prev
        </Button>
        <Chip label={page} />

        <Button
          className={Styles.button}
          variant="contained"
          onClick={() => {
            setPage((page) => page + 1);
          }}
          disabled={page * limit >= total}
        >
          next
        </Button>
      </Box>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Grid
          className={Styles.home}
          container
          spacing={3}
          columns={{ xs: 4, sm: 8, md: 10 }}
        >
          {data.length > 0 ? (
            data.map((record) => (
              <CustomerCard record={record} key={record.id} />
            ))
          ) : (
            <Alert severity="error" className={Styles.noRecord}>
              no records found
            </Alert>
          )}
        </Grid>
      )}
    </Box>
  );
}

export default List;
