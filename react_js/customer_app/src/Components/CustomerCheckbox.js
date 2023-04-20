import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";

function CustomerCheckbox({ setRecord }) {
  const [state, setState] = useState({
    prospect: false,
    carrier: false,
    Factor: false,
    Customer: false,
    Supplier: false,
    interrnalPartne: false,
  });
  useEffect(() => {
    const url = "ws/action";
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
        setState({ ...state, Customer: response.data[1].values.isCustomer })
      );
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { prospect, carrier, Factor, Customer, Supplier, interrnalPartner } =
    state;

  const handleCustomer = (event) => {
    const url = "ws/action";
    const checked = event.target.checked;
    console.log(checked);

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
        action:
          "action-partner-group-check-can-change-customer,action-partner-record-invoices-copy-default-value,action-partner-account-attrs-hide-customer-account,action-partner-attrs-unset-prospect,action-partner-record-unset-factor",
        model: "com.axelor.apps.base.db.Partner",
        criteria: [],
      }),
    })
      .then((response) => response.json())
      .then((record) => {
        const { values } = record.data[record.data.length - 1];
        console.log(values);
        setState({
          ...state,
          Factor: values.isFactor,
          Customer: checked,
        });
      });
  };

  const handleProspect = (event) => {
    const checked = event.target.checked;

    const url = "ws/action";
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
        action:
          "action-partner-group-check-can-change-customer,action-partner-record-invoices-copy-default-value,action-partner-account-attrs-hide-customer-account,action-partner-attrs-unset-prospect,action-partner-record-unset-factor",
        model: "com.axelor.apps.base.db.Partner",
        criteria: [],
      }),
    })
      .then((response) => response.json())
      .then((record) => {
        const { values } = record.data[record.data.length - 1];

        setState({
          ...state,
          prospect: checked,
          Factor: values.isFactor,
        });
      });
  };

  const handlefactor = (event) => {
    const checked = event.target.checked;
    const url = "ws/action";
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
        action:
          "action-partner-group-check-can-change-factor,action-partner-record-set-factor",
        model: "com.axelor.apps.base.db.Partner",
        criteria: [],
      }),
    })
      .then((response) => response.json())
      .then((record) => {
        const { values } = record.data[record.data.length - 1];

        setState({
          ...state,
          prospect: values.isProspect,
          carrier: values.isCarrier,
          Factor: checked,
          Customer: values.isCustomer,
          Supplier: values.isSupplier,
        });
      });
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
      <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={prospect}
                  onChange={handleProspect}
                  name="prospect"
                />
              }
              label="prospect"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={carrier}
                  onChange={handleChange}
                  name="carrier"
                />
              }
              label="carrier"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Factor}
                  onChange={handlefactor}
                  name="Factor"
                />
              }
              label="Factor"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Customer}
                  onChange={handleCustomer}
                  name="Customer"
                />
              }
              label="Customer"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Supplier}
                  onChange={handleChange}
                  name="Supplier"
                />
              }
              label="Supplier"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={interrnalPartner}
                  onChange={handleChange}
                  name="internal partner"
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
