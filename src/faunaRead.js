const cuid = require("cuid");
const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, id) {
  const KEY = faunaKey || ENGAGEDEMO_SECRET;
  const client = new faunadb.Client({ secret: KEY });
  const R = await client
    .query(q.Get(q.Match(q.Index("features_by_id"), id)))
    .catch(e => e);
  return R;
};
