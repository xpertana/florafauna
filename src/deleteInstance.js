const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, id = "cjqwkq9ie0001u1mnke9ulmur") {
  const client = new faunadb.Client({ secret: KEY });
  const R = await client
    .query(q.Get(q.Match(q.Index("features_by_id"), id)))
    .catch(e => e);
  return R;
};
