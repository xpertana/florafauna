const faunadb = require("../shim/faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, database, role = "server") {
  const client = new faunadb.Client({ secret: faunaKey });
  const R = await client
    .query(q.CreateKey({ database: q.Database(database), role }))
    .catch(e => {
      return e;
    });
  return R;
};
