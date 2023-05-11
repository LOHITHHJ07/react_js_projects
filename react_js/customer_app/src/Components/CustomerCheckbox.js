import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./CustomerCheckbox.module.css";
import api from "../api.js";

const data = {
  isProspect: {
    action:
      "action-partner-attrs-unset-customer,action-partner-record-unset-factor",
  },
  isCustomer: {
    action:
      "action-partner-group-check-can-change-customer,action-partner-record-invoices-copy-default-value,action-partner-account-attrs-hide-customer-account,action-partner-attrs-unset-prospect,action-partner-record-unset-factor",
  },
  isFactor: {
    action:
      "action-partner-group-check-can-change-factor,action-partner-record-set-factor",
  },
  isCarrier: {
    action: "action-partner-record-unset-factor",
  },
  isSupplier: {
    action:
      "action-partner-group-check-can-change-supplier,action-partner-account-attrs-hide-supplier-account,action-partner-record-unset-factor",
  },
};
function CustomerCheckbox({ record, setRecord }) {
  const handlecheck = (event) => {
    const checked = event.target.checked;
    setRecord((record) => ({ ...record, [event.target.name]: checked }));
    api.handleCheckBox(event, { data }).then((record) => {
      const { values } = record.data[record.data.length - 1];
      setRecord((record) => ({
        ...record,
        ...values,
      }));
    });
  };

  return (
    <Box className={styles.box}>
      <Box className={styles.box}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={record?.isProspect ?? false}
                  onChange={handlecheck}
                  name="isProspect"
                />
              }
              label="prospect"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={record?.isCarrier ?? false}
                  onChange={handlecheck}
                  name="isCarrier"
                />
              }
              label="carrier"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={record?.isFactor ?? false}
                  onChange={handlecheck}
                  name="isFactor"
                />
              }
              label="Factor"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box className={styles.box}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={record?.isCustomer ?? false}
                  onChange={handlecheck}
                  name="isCustomer"
                />
              }
              label="Customer"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={record?.isSupplier ?? false}
                  onChange={handlecheck}
                  name="isSupplier"
                />
              }
              label="Supplier"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={record?.isInternal ?? false}
                  onChange={handlecheck}
                  name="isInternal"
                />
              }
              label="internal partner"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default CustomerCheckbox;
