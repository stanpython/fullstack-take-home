const { Pool } = require("pg");

const config = {
  max: 5,
  ideTimeoutMillis: 30000,
  user: "admin",
  password: "password",
  database: "course-db",
  host: "db",
  port: 5432,
};

console.log(`Connecting to database ${config.database} on host ${config.host}`);

// this initializes a connection pool
// it will keep idle connections open for 30 seconds
// and set a limit of maximum 5 idle clients
const pool = new Pool(config);

// if an error is encountered by a client while it sits idle in the pool
// the pool itself will emit an error event
pool.on("error", (err, client) => {
  console.error("idle client error", err.message, err.stack);
});

// export the query method for passing queries to the pool
module.exports.query = (text, values, callback) => {
  console.log("query:", text);
  return pool.query(text, values, callback);
};

module.exports.connect = (callback) => {
  return pool.connect(callback);
};
