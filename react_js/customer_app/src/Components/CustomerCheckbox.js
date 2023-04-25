import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";
import Styles from "./CustomerCheckbox.module.css";

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

function CustomerCheckbox({ setRecord }) {
  const [CheckBox, setCheckbox] = useState({
    isProspect: false,
    isCarrier: false,
    isFactor: false,
    isCustomer: false,
    isSupplier: false,
    isInternal: false,
  });

  useEffect(() => {
    const url = "ws/action";
    fetch(url, {
      method: "POST",
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
      body: JSON.stringify({
        action:
          "action-group-base-partner-onnew,com.axelor.meta.web.MetaController:moreAttrs",
        data: {
          criteria: [],
          context: {
            _model: "com.axelor.apps.base.db.Partner",
            _isCustomer: "true",
            _domain:
              "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
            "json-enhance": true,
            _id: null,
            partnerAttrs: "{}",
            contactPartnerSet: [],
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((response) =>
        setCheckbox({
          ...CheckBox,
          isCustomer: response.data[1]?.values?.isCustomer,
        })
      );
  }, []);

  const {
    isProspect,
    isCarrier,
    isFactor,
    isCustomer,
    isSupplier,
    isInternal,
  } = CheckBox;

  const handleCheckBox = (event) => {
    const checked = event.target.checked;
    const url = "ws/action";
    if (event.target.name !== "isInternal")
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
          domain:
            "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
          action: data[event.target.name].action,
          model: "com.axelor.apps.base.db.Partner",
          criteria: [],
        }),
      })
        .then((response) => response.json())
        .then((record) => {
          const { values } = record.data[record.data.length - 1];

          setCheckbox((data) => ({
            ...CheckBox,
            ...values,
            [event.target.name]: checked,
          }));
        });
  };

  return (
    <Box className={Styles.box}>
      <Box className={Styles.box}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isProspect}
                  onChange={handleCheckBox}
                  name="isProspect"
                />
              }
              label="prospect"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCarrier}
                  onChange={handleCheckBox}
                  name="isCarrier"
                />
              }
              label="carrier"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isFactor}
                  onChange={handleCheckBox}
                  name="isFactor"
                />
              }
              label="Factor"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box className={Styles.box}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCustomer}
                  onChange={handleCheckBox}
                  name="isCustomer"
                />
              }
              label="Customer"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isSupplier}
                  onChange={handleCheckBox}
                  name="isSupplier"
                />
              }
              label="Supplier"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isInternal}
                  onChange={handleCheckBox}
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
