const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(
  faunaKey,
  dbClass,
  dbField = "id",
  unique = true
) {
  const client = new faunadb.Client({ secret: faunaKey });
  const name = `${dbClass}_by_${dbField}`;
  console.log(name);

  const R = await client
    .query(
      q.CreateIndex({
        name,
        source: q.Class(dbClass),
        terms: [{ field: ["data", dbField] }],
        unique
      })
    )
    .catch(e => e);
  return R;
};
