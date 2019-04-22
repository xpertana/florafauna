const cuid = require("cuid");
const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, data) {
  const KEY = faunaKey;
  const client = new faunadb.Client({ secret: KEY });

  // add id field if one does not already exist
  data.i = data.i || cuid.slug();
  const R = await client.query(q.Create(q.Class(dbClass), { data }));
  return R;
};
