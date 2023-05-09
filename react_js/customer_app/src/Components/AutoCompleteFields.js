import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { useState, useMemo, useCallback } from "react";

function AutoCompleteFields({ setRecord, data }) {
  const [Category, setCategory] = useState([{ name: " loading" }]);
  const [Source, setSource] = useState([{ name: " loading" }]);
  const [searchTextSource, setSearchTextSource] = useState("");
  const [searchTextCat, setsearchTextCat] = useState("");

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  }
  const clickCategroy = useCallback((searchTextCat = "") => {
    const url = "ws/rest/com.axelor.apps.base.db.PartnerCategory/search";
    fetch(url, {
      method: "POST",

      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
      body: JSON.stringify({
        data: {
          code: searchTextCat,
          name: searchTextCat,
        },
      }),
    })
      .then((response) => response.json())
      .then((record) => {
        setCategory(record.data ?? []);
      });
  }, []);

  const defaultProps = {
    options: Category,
    getOptionLabel: (option) => option.name,
  };

  const clickSource = useCallback((searchTextSource = "") => {
    const url = "ws/rest/com.axelor.apps.base.db.Source/search";
    fetch(url, {
      method: "POST",

      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
      body: JSON.stringify({
        data: {
          code: searchTextSource,
          name: searchTextSource,
        },
      }),
    })
      .then((response) => response.json())
      .then((record) => {
        setSource(record.data ?? []);
      });
  }, []);

  const SourceProps = {
    options: Source,
    getOptionLabel: (option) => option.name,
  };

  const handleSourceChange = useMemo(
    () =>
      debounce((e, value, reason) => {
        if (reason === "input") {
          setSearchTextSource(value);
          clickSource(value);
        }
      }),
    [clickSource]
  );
  const handleCatChange = useMemo(
    () =>
      debounce((e, value, reason) => {
        if (reason === "input") {
          setsearchTextCat(value);
          clickCategroy(value);
        }
      }),
    [clickCategroy]
  );

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
          onInputChange={handleCatChange}
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
          value={data?.partnerCategory ?? null}
          isOptionEqualToValue={(option, value) => option.name === value}
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
          onInputChange={handleSourceChange}
          onOpen={() => {
            clickSource("");
          }}
          onChange={(e, val) => {
            setRecord((data) => ({
              ...data,
              source: val,
            }));
          }}
          {...SourceProps}
          value={data?.source ?? null}
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
