import CustomerCard from "./CustomerCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./List.module.css";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import api from "../api.js";
import { useCallback, useEffect, useState } from "react";

const handlePage = (
  searchText,
  page,
  Data,
  setLoading,
  setPage,
  setTotal,
  setData
) => {
  setLoading(true);
  const data = searchText
    ? { data: Data }
    : {
        data: {
          _domain:
            "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
        },
      };
  api
    .search("com.axelor.apps.base.db.Partner", {
      body: {
        ...data,
        offset: (page - 1) * LIMIT,
        limit: LIMIT,
      },
    })
    .then((record) => {
      setData(record.data ?? []);
      setTotal(record.total);
      setLoading(false);
    });
};

const LIMIT = 9;
function List({ searchText }) {
  const Data = {
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
  };
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPage(1);
    handlePage(searchText, page, Data, setLoading, setPage, setTotal, setData);
  }, [searchText]);

  const clickHandler = useCallback(
    (page) => {
      handlePage(
        searchText,
        page,
        Data,
        setLoading,
        setPage,
        setTotal,
        setData
      );
    },
    [page, Data, searchText, setPage, setLoading, setTotal, setData]
  );
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflowY: "auto",
      }}
    >
      <Box>
        <Button
          className={styles.button}
          name="prev"
          variant="contained"
          disabled={page === 1}
          onClick={() => {
            setPage((page) => page - 1);
            clickHandler(page - 1);
          }}
        >
          prev
        </Button>
        <Chip label={page} />

        <Button
          className={styles.button}
          name="next"
          variant="contained"
          disabled={page * LIMIT >= total}
          onClick={() => {
            setPage((page) => page + 1);
            clickHandler(page + 1);
          }}
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
          className={styles.home}
          container
          spacing={3}
          columns={{ xs: 4, sm: 8, md: 10 }}
        >
          {data.length > 0 ? (
            data.map((record) => (
              <CustomerCard record={record} key={record.id} />
            ))
          ) : (
            <Alert severity="error" className={styles.noRecord}>
              no records found
            </Alert>
          )}
        </Grid>
      )}
    </Box>
  );
}

export default List;
