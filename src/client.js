const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = function(faunaKey) {
  const client = new faunadb.Client({ secret: faunaKey });
  return client;
};
