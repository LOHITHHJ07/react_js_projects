import Styles from "./CustomerForm.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CustomerCheckbox from "./CustomerCheckbox";
import Stack from "@mui/material/Stack";
import AutoCompleteFields from "./AutoCompleteFields";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api.js";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function Form({ setSearchText }) {
  const [record, setRecord] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api.get("com.axelor.apps.base.db.Partner", { id }).then((record) => {
        setRecord(record);
      });
    } else {
      setRecord(null);
    }
  }, [id]);
  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const update = (record) => {
    api
      .update("com.axelor.apps.base.db.Partner", { record })
      .then(() => navigate("/"));
  };
  const remove = (record) => {
    const data = [{ id: record.id, version: record.version }];
    api
      .Delete("com.axelor.apps.base.db.Partner/removeAll", { data })
      .then(() => setSearchText(null), navigate("/"));
  };

  return (
    <Card className={Styles.content}>
      {" "}
      <CardContent
        sx={{ display: "flex", flexDirection: "column", position: "relative" }}
      >
        {" "}
        <CardMedia
          component="img"
          alt="not  found"
          className={Styles.cardImg}
          image="ws/rest/com.axelor.meta.db.MetaFile/130/content/download?image=true&v=0&parentId=130&parentModel=com.axelor.meta.db.MetaFile"
        />
        <Box className={Styles.partnertype}>
          <FormControl className={Styles.name}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Partner-type
            </InputLabel>
            <NativeSelect
              defaultValue={record?.partnerType ?? null}
              name="partnerType"
              onChange={handleChange}
            >
              <option value={1}>Company</option>
              <option value={2}>Individual</option>
            </NativeSelect>
          </FormControl>

          <TextField
            className={Styles.name}
            id="standard-helperText"
            label="name"
            name="name"
            value={record?.name ?? ""}
            onChange={handleChange}
            variant="standard"
          />
          {record?.partnerType === "2" ? (
            <Box
              className={Styles.indidividual}
              sx={{
                "& .MuiTextField-root": { m: 0.7, width: "28ch" },
              }}
            >
              <FormControl className={Styles.civility}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Civility
                </InputLabel>
                <NativeSelect
                  defaultValue={record?.Civility ?? ""}
                  inputProps={{
                    name: "Civility",
                  }}
                >
                  <option value="Mr">Mr.</option>
                  <option value="Ms">Ms.</option>
                  <option value="Prof">Prof.</option>
                  <option value="Dr">Dr.</option>
                </NativeSelect>
              </FormControl>
              <TextField
                sx={{ paddingRight: "30px" }}
                label="Name"
                name="name"
                value={record?.name ?? ""}
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                sx={{ paddingRight: "40px" }}
                name="firstname"
                label="Firstname"
                value={record?.firstname ?? ""}
                variant="standard"
                onChange={handleChange}
              />
            </Box>
          ) : (
            " "
          )}

          <Box
            className={Styles.Checkbox}
            sx={{
              "& .MuiTextField-root": { m: 3, width: "1000px" },
            }}
          >
            <CustomerCheckbox
              setRecord={setRecord}
              record={record}
            ></CustomerCheckbox>
          </Box>
        </Box>
        <TextField
          disabled
          id="standard-disabled"
          label=""
          defaultValue="Partner details"
          variant="standard"
        />
        <Box className={Styles.formFields}>
          <AutoCompleteFields
            data={record}
            setRecord={setRecord}
          ></AutoCompleteFields>

          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            sx={{
              maxWidth: 400,
            }}
          >
            <TextField
              name="registrationCode"
              label="Registration code"
              type="search"
              value={record?.registrationCode ?? ""}
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
            <TextField
              label="Payment-delay"
              type="number"
              name="paymentDelay"
              value={record?.paymentDelay ?? ""}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
            <TextField
              label="Turnover"
              type="number"
              name="saleTurnover"
              value={record?.saleTurnover ?? ""}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
          </Stack>
          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            sx={{
              "& > *": { flexGrow: 2 },

              maxWidth: 400,
            }}
          >
            <TextField
              label="Emp-Nbr"
              type="number"
              name="nbrEmployees"
              value={record?.nbrEmployees ?? ""}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              label="Tax N"
              type="search"
              variant="standard"
              name="taxNbr"
              value={record?.taxNbr ?? ""}
              onChange={handleChange}
            />
          </Stack>
        </Box>
        <Box>
          <ThemeProvider theme={theme}>
            <Button
              className={Styles.button}
              color="neutral"
              variant="contained"
              onClick={() => update(record)}
            >
              Update
            </Button>
            {record?.id ? (
              <Button
                className={Styles.button}
                color="neutral"
                variant="contained"
                onClick={() => remove(record)}
              >
                Delete
              </Button>
            ) : (
              ""
            )}
          </ThemeProvider>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Form;
