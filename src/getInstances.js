const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, index, value) {
  const client = new faunadb.Client({ secret: faunaKey });
  const R = await client
    .query(q.Paginate(q.Match(q.Index(index), value)))
    .catch(e => e);
  return R;
};
