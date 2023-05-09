import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Styles from "./searchbar.module.css";
import { useMemo } from "react";

function SearchBar({ searchText, setSearchText }) {
  function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  }

  const handleClick = useMemo(
    () =>
      debounce((e) => {
        setSearchText(e.target.value);
      }),
    [searchText]
  );

  return (
    <Box className={Styles.search}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleClick}
      />
    </Box>
  );
}

export default SearchBar;
