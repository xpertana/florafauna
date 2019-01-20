const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(
  faunaKey,
  dbClass,
  dbField = "id",
  unique = false
) {
  const KEY = faunaKey || ENGAGEDEMO_SECRET;
  const client = new faunadb.Client({ secret: KEY });
  const name = `${dbClass}_by_${dbField}`;
  console.log(name);

  const R = await client
    .query(
      q.CreateIndex({
        name,
        source: q.Class(dbClass),
        terms: [{ field: ["data", dbField] }],
        unique
        //values: [{ field: ["data", "title"] }]
      })
    )
    .catch(e => e);

  return R;
};
