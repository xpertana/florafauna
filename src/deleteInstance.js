const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, refId) {
  const client = new faunadb.Client({ secret: KEY });
  const R = await client
    .query(q.Delete(q.Ref(q.Class(dbClass), refId)))
    .catch(e => e);
  return R;
};
