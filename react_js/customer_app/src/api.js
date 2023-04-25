const api = {
  search: async function (db, options) {
    const url = `ws/rest/${db}/search`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  },
  fetch: async function (db, id) {
    const url = `ws/rest/${db}/${id}/fetch`;
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
    const record = await response.json();
    return record.data[0];
  },

  update: async function (record, db) {
    const url = `ws/rest/${db}`;
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
    });
  },
};
export default api;
