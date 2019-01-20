const cuid = require("cuid");
const KEY = "fnADFHKVUtACDaQYTXHDiMfbHU4RJDTI0Kba9c60";
const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, index, value) {
  const client = new faunadb.Client({ secret: KEY });
  const R = await client
    .query(q.Get(q.Match(q.Index(index), value)))
    .catch(e => e);
  return R;
};
