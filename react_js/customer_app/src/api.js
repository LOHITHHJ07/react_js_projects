const headers = {
  connection: "keep-alive",
  "Content-Type": "application/json",
  Authorization: "Basic YWRtaW46YWRtaW4=",
};

const search = async (db, options = {}) => {
  const url = `ws/rest/${db}/search`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { ...headers, ...options.headers },
      ...(options.body ? { body: JSON.stringify(options.body) } : {}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`HTTP error! ${error}`);
  }
};

const get = async (db, id, options = {}) => {
  const url = `ws/rest/${db}/${id}/fetch`;
  const body = {
    _domain:
      "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)",
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { ...headers, ...options.headers },
      body: JSON.stringify(body),
    });
    const record = await response.json();
    return record.data[0];
  } catch (error) {
    throw new Error(`HTTP error! ${error}`);
  }
};

const update = async (record, db, options = {}) => {
  const url = `ws/rest/${db}`;
  try {
    await fetch(url, {
      method: "POST",
      headers: { ...headers, ...options.headers },
      body: JSON.stringify({ data: record }),
    });
  } catch (error) {
    throw new Error(`HTTP error! ${error}`);
  }
};

const api = { search, get, update };
export default api;
