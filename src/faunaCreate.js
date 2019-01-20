const cuid = require("cuid");
const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, data) {
  const KEY = faunaKey;
  const client = new faunadb.Client({ secret: KEY });
  const R = await client.query(
    q.Create(q.Class(dbClass), { id: cuid(), data: { ...data, id: cuid() } })
  );
  return R;
};
