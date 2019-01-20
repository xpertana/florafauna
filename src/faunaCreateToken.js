const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, ref) {
  const client = new faunadb.Client({ secret: KEY });
  const R = await client
    .query(q.Login(q.Ref(q.Class("directory"), "221925200528146955"), {}))
    .catch(e => e);
  return R;
};
