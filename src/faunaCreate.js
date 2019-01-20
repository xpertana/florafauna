const cuid = require("cuid");
const ENGAGEDEMO_SECRET = "fnADEuAP_BACDRta8HL-JZavWtlesrhlgTJMrQ-U";
const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, data) {
  const KEY = faunaKey || ENGAGEDEMO_SECRET;
  const client = new faunadb.Client({ secret: KEY });
  const R = await client.query(
    q.Create(q.Class(dbClass), { id: cuid(), data: { ...data, id: cuid() } })
  );
  return R;
};
