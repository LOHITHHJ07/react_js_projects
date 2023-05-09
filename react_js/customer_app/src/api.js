const headers = {
  connection: "keep-alive",
  "Content-Type": "application/json",
  Authorization: "Basic YWRtaW46YWRtaW4=",
};
const Domain =
  "self.isContact = false AND (self.isCustomer = true OR self.isProspect = true)";

const search = async (db, options = {}) => {
  const url = `ws/rest/${db}/search`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { ...headers, ...options.headers },
      body: JSON.stringify({
        ...options.body,
        sortBy: null,
        feilds: ["id", "name", "code"],
        limit: options.limit,
        offset: options.offset,
        total: options.total,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to execute search API for ${db}. Error: ${error.message}`
    );
  }
};

const get = async (db, options = {}) => {
  const url = `ws/rest/${db}/${options.id}/fetch`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { ...headers, ...options.headers },
      body: JSON.stringify({
        data: {
          _domain: Domain,
        },
      }),
    });

    const record = await response.json();
    return record.data[0];
  } catch (error) {
    throw new Error(
      `Failed to execute get API for ${db} and id ${options.id}. Error: ${error.message}`
    );
  }
};

const update = async (db, options = {}) => {
  const url = `ws/rest/${db}`;
  try {
    await fetch(url, {
      method: "POST",
      headers: { ...headers, ...options.headers },
      body: JSON.stringify({ data: options.record }),
    });
    // const customerData = await url.json();
    // return customerData.data[0];
  } catch (error) {
    throw new Error(
      `Failed to execute update API for ${db}. Error: ${error.message}`
    );
  }
};

const Delete = async (db, options = {}) => {
  const url = `ws/rest/${db}`;
  try {
    await fetch(url, {
      method: "POST",
      headers: { ...headers, ...options.headers },
      body: JSON.stringify({ records: options.data }),
    });
  } catch (error) {
    throw new Error(
      `Failed to execute update API for ${db}. Error: ${error.message}`
    );
  }
};

const api = { search, get, update, Delete };
export default api;
