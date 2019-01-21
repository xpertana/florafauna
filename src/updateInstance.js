const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, refId, data) {
  const client = new faunadb.Client({ secret: faunaKey });
  const R = await client
    .query(q.Update(q.Ref(q.Class(dbClass), refId), { data }))
    .catch(e => e);
  return R;
};
