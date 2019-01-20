const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, ref) {
  const KEY = "fnADFGptIoACDe8-0-tsndqP7LGsMk_EnJbIRDTS";
  const client = new faunadb.Client({ secret: KEY });
  const R = await client
    .query(q.Login(q.Ref(q.Class("directory"), "221925200528146955"), {}))
    .catch(e => e);
  return R;
};
