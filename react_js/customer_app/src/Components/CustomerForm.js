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
import { useState } from "react";

function CustomerForm({ data, id }) {
  const [record, setRecord] = useState({
    name: data?.name,
    id: data?.id,
    version: data?.version,
  });

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

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
        "Transfer-Encoding": "chunked",
        Authorization: "Basic YWRtaW46YWRtaW4=",
        "X-CSRF-Token": "ca0c8d4baf4543f1bf649af3327e4b1b",
      },
      body: JSON.stringify({
        data: record,
      }),
    });
  };
  return (
    <Card
      sx={{
        marginTop: "5%",
        marginLeft: "10%",
        maxWidth: "1500px",
        boxShadow: "1px 1px 10px #888888",
      }}
    >
      {" "}
      <CardContent
        sx={{ display: "flex", flexDirection: "column", position: "relative" }}
      >
        {" "}
        <CardMedia
          component="img"
          alt="not  found"
          sx={{
            height: 150,
            width: 150,
            border: "1px solid",
            marginLeft: "90px",
          }}
          image="ws/rest/com.axelor.meta.db.MetaFile/130/content/download?image=true&v=0&parentId=130&parentModel=com.axelor.meta.db.MetaFile"
        />
        <Box sx={{ paddingLeft: "10px", position: "relative" }}>
          <FormControl sx={{ minWidth: "850px" }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Partner-type
            </InputLabel>
            <NativeSelect
              value={data?.partnerType}
              name="partnerType"
              onChange={handleChange}
            >
              <option value={1}>Company</option>
              <option value={2}>Individual</option>
            </NativeSelect>
          </FormControl>

          <TextField
            sx={{ minWidth: "850px" }}
            id="standard-helperText"
            label="name"
            name="name"
            defaultValue={data?.name}
            onChange={handleChange}
            variant="standard"
          />
          {record.partnerType === "2" ? (
            <Box
              sx={{
                paddingLeft: "300px",
                display: "flex",
                alignItems: "start",
                "& .MuiTextField-root": { m: 0.7, width: "28ch" },
              }}
            >
              <FormControl
                sx={{
                  paddingRight: "30px",
                  maxWidth: "400px",
                }}
              >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Civility
                </InputLabel>
                <NativeSelect
                  defaultValue={record.Civility}
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
                defaultValue={data?.name}
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                sx={{ paddingRight: "40px" }}
                name="firstname"
                label="Firstname"
                defaultValue={data?.firstname}
                variant="standard"
                onChange={handleChange}
              />
            </Box>
          ) : (
            " "
          )}

          <Box
            sx={{
              paddingLeft: "300px",
              display: "flex",
              alignItems: "start",
              minWidth: "800px",
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            justifyContent: "space-between",
          }}
        >
          <AutoCompleteFields
            data={data}
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
              defaultValue={data?.registrationCode}
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleChange}
            />
            <TextField
              label="Payment-delay"
              type="number"
              name="paymentDelay"
              defaultValue={data?.paymentDelay}
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
              defaultValue={data?.saleTurnover}
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
              defaultValue={data?.nbrEmployees}
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
              defaultValue={data?.taxNbr}
              onChange={handleChange}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
