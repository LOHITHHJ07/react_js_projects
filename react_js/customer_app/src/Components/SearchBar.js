import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import styles from "./searchbar.module.css";
import { useEffect, useMemo, useState } from "react";

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

function SearchBar({ searchText, setSearchText }) {
  const [input, setInput] = useState("");
  const updateSearchText = useMemo(
    () =>
      debounce((searchText) => {
        setSearchText(searchText);
      }),
    [setSearchText]
  );

  useEffect(() => {
    updateSearchText(input);
  }, [input, updateSearchText]);

  const handleClick = (e) => {
    setInput(e.target.value);
  };
  return (
    <Box className={styles.search}>
      <TextField
        value={input}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleClick}
      />
    </Box>
  );
}

export default SearchBar;
