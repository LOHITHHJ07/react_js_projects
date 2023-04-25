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

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function CustomerForm() {
  const [record, setRecord] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const api = {
    FormData: async function () {
      const url = `ws/rest/com.axelor.apps.base.db.Partner/${id}/fetch`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          connection: "keep-alive",
          "Content-Type": "application/json",
          Authorization: "Basic YWRtaW46YWRtaW4=",
        },
        body: JSON.stringify({
          _domain:
            "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    },
  };

  useEffect(() => {
    if (id) {
      api.FormData().then((record) => {
        setRecord(record.data[0]);
      });
    } else {
      setRecord(null);
    }
  }, [id]);

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const update = () => {
    const url = "ws/rest/com.axelor.apps.base.db.Partner";
    fetch(url, {
      method: "POST",
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
      body: JSON.stringify({
        data: record,
      }),
    }).then(navigate("/"));
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
              defaultValue={record?.partnerType ?? ""}
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
                  value={record?.Civility ?? ""}
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
            <CustomerCheckbox setRecord={setRecord}></CustomerCheckbox>
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
        <Box className={Styles.update}>
          <ThemeProvider theme={theme}>
            <Button color="neutral" variant="contained" onClick={update}>
              Update
            </Button>
          </ThemeProvider>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CustomerForm;
