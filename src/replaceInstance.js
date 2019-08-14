const faunadb = require("../shim/faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, ref, data) {
  const client = new faunadb.Client({ secret: faunaKey });

  // we bump the version number here!
  const R = await client.query(q.Replace(ref, { data })).catch(e => e);
  return R;
};
