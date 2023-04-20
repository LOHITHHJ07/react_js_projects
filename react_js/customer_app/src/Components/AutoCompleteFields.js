import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function AutoCompleteFields({ setRecord, data }) {
  const [Category, setCategory] = useState([{ name: " loading" }]);
  const [Source, setSource] = useState([{ name: " loading" }]);

  const clickCategroy = () => {
    const url = "ws/rest/com.axelor.apps.base.db.PartnerCategory/search";
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
        _domain:
          "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
        limit: 20,
      }),
    })
      .then((response) => response.json())
      .then((record) => setCategory(record.data));
  };
  const defaultProps = {
    options: Category,
    getOptionLabel: (option) => option.name,
  };

  const clickSource = (event) => {
    const url = "ws/rest/com.axelor.apps.base.db.Source/search";
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
        _domain:
          "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
        limit: 20,
      }),
    })
      .then((response) => response.json())
      .then((record) => setSource(record.data));
  };
  const SourceProps = {
    options: Source,
    getOptionLabel: (option) => option.name,
  };

  return (
    <Box>
      <Stack
        spacing={1}
        sx={{
          display: "flex",
          alignItems: "start",
          "& .MuiTextField-root": { m: 3, width: "400px" },
          marginLeft: 0,
          padding: 0,
        }}
      >
        <Autocomplete
          onOpen={() => {
            clickCategroy();
          }}
          onChange={(e, val) => {
            setRecord((data) => ({
              ...data,
              partnerCategory: val,
            }));
          }}
          {...defaultProps}
          defaultValue={data?.partnerCategory}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} label="Category" variant="standard" />
          )}
        />
      </Stack>
      <Stack
        spacing={1}
        sx={{
          display: "flex",
          alignItems: "start",
          "& .MuiTextField-root": { m: 3, width: "400px" },
          margin: 0,
          padding: 0,
        }}
      >
        <Autocomplete
          onOpen={() => {
            clickSource();
          }}
          onChange={(e, val) => {
            setRecord((data) => ({
              ...data,
              source: val,
            }));
          }}
          {...SourceProps}
          defaultValue={data?.source}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} label="Source" variant="standard" />
          )}
        />
      </Stack>
    </Box>
  );
}

export default AutoCompleteFields;
