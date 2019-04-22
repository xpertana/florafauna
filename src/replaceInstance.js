const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, ref, data) {
  const client = new faunadb.Client({ secret: faunaKey });

  // we bump the version number here!
  data.v = data.v + 1;
  const R = await client.query(q.Replace(ref, { data })).catch(e => e);
  return R;
};
