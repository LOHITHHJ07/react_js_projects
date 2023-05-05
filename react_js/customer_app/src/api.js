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
      ...(options.body ? { body: JSON.stringify(options.body) } : {}),
      body: JSON.stringify({ _domain: Domain, data: options.record }),
    });
  } catch (error) {
    throw new Error(
      `Failed to execute update API for ${db}. Error: ${error.message}`
    );
  }
};

const api = { search, get, update };
export default api;
