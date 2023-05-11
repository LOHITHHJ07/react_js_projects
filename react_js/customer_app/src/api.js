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
      body: JSON.stringify(options.body),
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
const handleCheckBox = async (event, options = {}) => {
  const url = "ws/action";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
      },
      body: JSON.stringify({
        action: options.data[event.target.name].action,
        model: "com.axelor.apps.base.db.Partner",
        criteria: [],
      }),
    });

    const record = await response.json();
    return record;
  } catch (error) {
    throw new Error(` Error: ${error.message}`);
  }
};
// const handleCheckBox = (event ) => {
//   const url = "ws/action";
//      try{
//    const response=await fetch(url, {
//       method: "POST",
//       headers: { ...headers, ...options.headers },
//       body:JSON.stringify({
//         action: data[event.target.name].action,
//         model: "com.axelor.apps.base.db.Partner",
//         criteria: [],
//       }),
// });
//      const record = await response.json();
//      return record}

//     catch (error) {
//     throw new Error(
//       `Failed to execute update API for ${db}. Error: ${error.message}`
//     );
//     }
// };

const api = { search, get, update, Delete, handleCheckBox };
export default api;
