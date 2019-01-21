const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, id) {
  try {
    const client = new faunadb.Client({ secret: faunaKey });
    const R = await client
      .query(q.Get(q.Match(q.Index(`${dbClass}_by_id`), id)))
      .catch(e => e);
    return R;
  } catch (e) {
    return e;
  }
};
