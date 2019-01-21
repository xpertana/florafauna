const genTermObj = require("./genTermObj");
const genValueObj = require("./genValueObj");

const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function({
  faunaKey,
  dbClass,
  name,
  terms,
  values,
  unique = false
}) {
  const client = new faunadb.Client({ secret: faunaKey });
  const obj = {
    name,
    source: q.Class(dbClass),
    unique
  };

  if (terms) obj.terms = genTermObj(terms);
  if (values) obj.values = genValueObj(values);

  const R = await client.query(q.CreateIndex(obj)).catch(e => e);
  return R;
};
