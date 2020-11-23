const { Pool } = require('pg');

const config = {
  max: 5,
  ideTimeoutMillis: 30000,
  user: 'admin',
  password: 'password',
  database: 'course-db',
  host: 'db',
  port: 5432,
};

console.log(`Connecting to database ${config.database} on host ${config.host}`);

// this initializes a connection pool
// it will keep idle connections open for 30 seconds
// and set a limit of maximum 5 idle clients
const pool = new Pool(config);

// if an error is encountered by a client while it sits idle in the pool
// the pool itself will emit an error event with both the error and
// the client which emitted the original error
// this is a rare occurrence but can happen if there is a network partition
// between your application and the database, the database restarts, etc.
// and so you might want to handle it and at least log it out
pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack);
});

// export the query method for passing queries to the pool
module.exports.query = (text, values, callback) => {
  console.log('query:', text);
  return pool.query(text, values, callback);
};

// the pool also supports checking out a client for
// multiple operations, such as a transaction
module.exports.connect = (callback) => {
  return pool.connect(callback);
};
