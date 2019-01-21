const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, ref, data) {
  const client = new faunadb.Client({ secret: faunaKey });
  const R = await client.query(q.Update(ref, { data })).catch(e => e);
  return R;
};
